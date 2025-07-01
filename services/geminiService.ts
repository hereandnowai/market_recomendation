
import { GoogleGenAI, Chat, GenerateContentResponse, Content, Part } from "@google/genai";
import { GEMINI_CHAT_MODEL, GEMINI_CONTENT_MODEL, CARAMEL_AI_NAME } from '../constants';
// import { ChatMessage as AppChatMessage } from '../types'; // Type inference for parameters

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("API_KEY environment variable not set. Gemini API calls will fail. Ensure this is configured in your environment.");
}

// Removed '!' from API_KEY!
const ai = new GoogleGenAI({ apiKey: API_KEY }); 

const caramelSystemInstruction = `You are ${CARAMEL_AI_NAME}, a friendly, expert AI assistant for the HERE AND NOW AI Marketing Recommendation Engine.
Your goal is to help marketing teams succeed.
You can:
- Answer questions about marketing strategies (e.g., SEO, content marketing, social media).
- Explain analytics terms (e.g., CTR, conversion rate, engagement).
- Guide users on choosing appropriate recommendation models (Collaborative, Content-based, Hybrid).
- Provide general assistance with navigating and using the platform's features.
- Keep responses concise and actionable.
- If asked about your identity, proudly state you are ${CARAMEL_AI_NAME} from HERE AND NOW AI.
- Do not provide code snippets unless specifically asked for illustrative purposes.
- Be polite and professional.
`;

const convertToGeminiHistory = (messages) => { // Removed : AppChatMessage[] and return : Content[]
  return messages.map((msg) => ({ // Removed : AppChatMessage from msg, : Content from return
    role: msg.sender === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text } as Part], 
  }));
};

export async function* sendMessageToCaramelAI(currentMessageText, historyFromApp) { // Removed types from params and return AsyncGenerator<string, void, undefined>
  if (!API_KEY) {
    yield "Caramel AI is currently unavailable due to a configuration issue.";
    return;
  }
  
  try {
    const geminiHistory = convertToGeminiHistory(historyFromApp);

    const chat = ai.chats.create({ // Removed : Chat
        model: GEMINI_CHAT_MODEL,
        history: geminiHistory,
        config: { 
            systemInstruction: caramelSystemInstruction,
        }
    });

    const result = await chat.sendMessageStream({ message: currentMessageText });
    for await (const chunk of result) { 
      if (chunk && typeof chunk.text === 'string') {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Error in sendMessageToCaramelAI:", error);
    yield "I'm having trouble connecting right now. Please try again in a moment.";
  }
}


export async function generateMarketingContent(prompt) { // Removed : string from param and Promise<string> from return
  if (!API_KEY) {
    return "AI content generation is currently unavailable due to a configuration issue.";
  }
  try {
    const response = await ai.models.generateContent({ // Removed : GenerateContentResponse
      model: GEMINI_CONTENT_MODEL,
      contents: prompt,
    });
    return response.text ?? ""; // Ensure a string is returned, default to "" if text is null/undefined
  } catch (error) {
    console.error("Error generating marketing content:", error);
    if (error instanceof Error) {
        throw new Error(`AI content generation failed: ${error.message}`);
    }
    throw new Error("An unknown error occurred during AI content generation.");
  }
}