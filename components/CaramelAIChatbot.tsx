
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CARAMEL_AI_NAME, CARAMEL_AI_FACE_URL } from '../constants';
import Button from './common/Button';
import LoadingSpinner from './common/LoadingSpinner';
import { sendMessageToCaramelAI } from '../services/geminiService';

const CaramelAIChatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { 
          id: 'initial-greeting', 
          sender: 'bot', 
          text: `Hello! I'm ${CARAMEL_AI_NAME}, your marketing assistant. How can I help you today? Ask me about marketing strategies, analytics, or how to use this platform.`, 
          timestamp: new Date() 
        }
      ]);
    }
  }, [isOpen, messages.length]);

  const handleSend = useCallback(async () => {
    if (input.trim() === '' || isLoading) return;

    const newUserMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newUserMessage]);
    const currentInput = input; 
    setInput('');
    setIsLoading(true);

    let botMessageId = undefined;

    try {
      const historyForAICall = messages.filter(m => m.id !== 'initial-greeting');
      const stream = await sendMessageToCaramelAI(currentInput, historyForAICall);
      
      let botResponseText = '';
      botMessageId = Date.now().toString() + '-bot';
      
      setMessages(prev => [...prev, { id: botMessageId, sender: 'bot', text: '', timestamp: new Date() }]);

      for await (const chunk of stream) {
        botResponseText += chunk;
        setMessages(prev => prev.map(msg => 
            msg.id === botMessageId ? { ...msg, text: botResponseText } : msg
        ));
      }
    } catch (error) {
      console.error("Error sending message to Caramel AI:", error);
      const errorMessage = {
        id: Date.now().toString() + '-error',
        sender: 'bot',
        text: "Sorry, I encountered an error. Please try again later.",
        timestamp: new Date(),
      };
      setMessages(prev => {
        const currentMessages = [...prev];
        if (botMessageId) {
            const lastMessage = currentMessages[currentMessages.length -1];
            if(lastMessage && lastMessage.id === botMessageId && lastMessage.text === '') {
                currentMessages.pop(); 
            }
        }
        currentMessages.push(errorMessage);
        return currentMessages;
      });
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  if (!isOpen) return null;

  return React.createElement(
    'div',
    { className: "fixed bottom-20 right-6 w-full max-w-md h-[70vh] max-h-[600px] bg-white shadow-xl rounded-lg flex flex-col z-40 border border-brandSecondary" },
    React.createElement(
      'header',
      { className: "bg-brandSecondary text-brandTextOnSecondary p-4 flex items-center justify-between rounded-t-lg" },
      React.createElement(
        'div',
        { className: "flex items-center" },
        React.createElement('img', { src: CARAMEL_AI_FACE_URL, alt: CARAMEL_AI_NAME, className: "w-10 h-10 rounded-full mr-3 border-2 border-brandPrimary" }),
        React.createElement('h2', { className: "text-lg font-semibold" }, CARAMEL_AI_NAME)
      ),
      React.createElement(
        'button',
        { onClick: onClose, className: "text-brandTextOnSecondary hover:text-brandPrimary" },
        React.createElement(
          'svg',
          { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
          React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" })
        )
      )
    ),
    React.createElement(
      'div',
      { className: "flex-1 p-4 overflow-y-auto space-y-3 bg-lightGray" },
      messages.map(msg => 
        React.createElement(
          'div',
          { key: msg.id, className: `flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}` },
          React.createElement(
            'div',
            { 
              className: `max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow ${
                msg.sender === 'user' ? 'bg-brandPrimary text-brandTextOnPrimary' : 'bg-white text-darkGray border border-mediumGray'
              }`
            },
            msg.text === '' && msg.sender === 'bot' 
              ? React.createElement(LoadingSpinner, { size: "sm", color: "text-brandSecondary" }) 
              : msg.text.split('\n').map((line, i) => React.createElement('p', { key: i, className: "whitespace-pre-wrap" }, line)),
            React.createElement(
              'p',
              { 
                className: `text-xs mt-1 ${msg.sender === 'user' ? 'text-black opacity-60 text-right' : 'text-gray-500 text-left'}`
              },
              msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            )
          )
        )
      ),
      React.createElement('div', { ref: messagesEndRef })
    ),
    React.createElement(
      'footer',
      { className: "p-4 border-t border-mediumGray bg-white rounded-b-lg" },
      React.createElement(
        'div',
        { className: "flex items-center space-x-2" },
        React.createElement('input', {
          type: "text",
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyPress: (e) => e.key === 'Enter' && handleSend(),
          placeholder: "Ask Caramel AI...",
          className: "flex-1 p-2 border border-gray-300 rounded-md focus:ring-brandPrimary focus:border-brandPrimary",
          disabled: isLoading
        }),
        React.createElement(Button, {
          onClick: handleSend, 
          variant: "primary", 
          disabled: isLoading || input.trim() === '',
          children: isLoading ? React.createElement(LoadingSpinner, { size: "sm", color: "text-brandTextOnPrimary" }) : 'Send'
        })
      )
    )
  );
};

export default CaramelAIChatbot;
