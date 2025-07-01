
import React, { useState } from 'react';
import Card from './common/Card';
import Button from './common/Button';
import { APP_NAME, ORG_NAME, ORG_WEBSITE } from '../constants';

const SettingsView = () => {
  const [email, setEmail] = useState('jane.doe@example.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [theme, setTheme] = useState('system');
  const [primaryColor, setPrimaryColor] = useState('#FFDF00'); // Default to brandPrimary

  const handleUpdateAccount = () => {
    alert(`Mock Update Account:
Email: ${email}
(Password fields are for UI demonstration only)`);
  };

  const handleApplyAppearance = () => {
    alert(`Mock Apply Appearance:
Theme: ${theme}
Primary Color: ${primaryColor}`);
  };

  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ".repeat(3);

  const InputField = ({ label, id, type, value, onChange, placeholder }) => (
    React.createElement('div', null,
      React.createElement('label', { htmlFor: id, className: "block text-sm font-medium text-gray-700 mb-1" }, label),
      React.createElement('input', {
        type: type,
        id: id,
        value: value,
        onChange: onChange,
        placeholder: placeholder,
        className: "mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-brandPrimary focus:border-brandPrimary sm:text-sm"
      })
    )
  );

  const RadioGroup = ({ label, name, options, selectedValue, onChange }) => (
    React.createElement('div', null,
      React.createElement('label', { className: "block text-sm font-medium text-gray-700 mb-1" }, label),
      React.createElement('fieldset', { className: "mt-1" },
        React.createElement('legend', { className: "sr-only" }, label),
        React.createElement('div', { className: "space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-4" },
          options.map(option => (
            React.createElement('div', { key: option.value, className: "flex items-center" },
              React.createElement('input', {
                id: `${name}-${option.value}`,
                name: name,
                type: "radio",
                value: option.value,
                checked: selectedValue === option.value,
                onChange: onChange,
                className: "focus:ring-brandPrimary h-4 w-4 text-brandPrimary border-gray-300"
              }),
              React.createElement('label', { htmlFor: `${name}-${option.value}`, className: "ml-2 block text-sm text-gray-700" }, option.label)
            )
          ))
        )
      )
    )
  );


  return (
    React.createElement('div', { className: "space-y-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-brandSecondary" }, "Settings"),

      React.createElement(Card, { title: "Account Management", children: [
        React.createElement('div', { className: "space-y-4" },
          React.createElement(InputField, {
            label: "Email Address",
            id: "email",
            type: "email",
            value: email,
            onChange: e => setEmail(e.target.value),
            placeholder: "your.email@example.com"
          }),
          React.createElement('hr', { className: "my-4" }),
          React.createElement(InputField, {
            label: "Current Password",
            id: "currentPassword",
            type: "password",
            value: currentPassword,
            onChange: e => setCurrentPassword(e.target.value),
            placeholder: "Enter current password"
          }),
          React.createElement(InputField, {
            label: "New Password",
            id: "newPassword",
            type: "password",
            value: newPassword,
            onChange: e => setNewPassword(e.target.value),
            placeholder: "Enter new password"
          }),
          React.createElement(InputField, {
            label: "Confirm New Password",
            id: "confirmPassword",
            type: "password",
            value: confirmPassword,
            onChange: e => setConfirmPassword(e.target.value),
            placeholder: "Confirm new password"
          }),
          React.createElement(Button, { 
            variant: "primary", 
            className: "mt-4", 
            onClick: handleUpdateAccount,
            children: "Update Account Details"
          })
        )
      ]}),

      React.createElement(Card, { title: "Appearance & Theme", children: [
        React.createElement('div', { className: "space-y-4" },
          React.createElement(RadioGroup, {
            label: "Application Theme",
            name: "theme",
            selectedValue: theme,
            onChange: e => { setTheme(e.target.value); alert(`Mock: Theme changed to ${e.target.value}`); },
            options: [
              { label: "Light", value: "light" },
              { label: "Dark", value: "dark" },
              { label: "System Default", value: "system" }
            ]
          }),
          React.createElement('div', null,
            React.createElement('label', { htmlFor: "primaryColor", className: "block text-sm font-medium text-gray-700 mb-1 mt-3" }, "Primary Accent Color (Mock)"),
            React.createElement('input', {
              type: "color",
              id: "primaryColor",
              value: primaryColor,
              onChange: e => { setPrimaryColor(e.target.value); alert(`Mock: Primary color changed to ${e.target.value}`); },
              className: "mt-1 h-10 w-16 p-0 border-gray-300 rounded-md cursor-pointer focus:ring-brandPrimary"
            })
          ),
          React.createElement(Button, { 
            variant: "secondary", 
            className: "mt-4", 
            onClick: handleApplyAppearance,
            children: "Apply Appearance Settings"
          })
        )
      ]}),
      
      React.createElement(Card, { title: "Terms and Conditions", children: [
        React.createElement('div', { className: "prose prose-sm max-w-none max-h-60 overflow-y-auto text-gray-700 border p-3 rounded-md bg-gray-50" }, 
            React.createElement('p', null, loremIpsum)
        )
      ]}),

      React.createElement(Card, { title: "Privacy Policy", children: [
        React.createElement('div', { className: "prose prose-sm max-w-none max-h-60 overflow-y-auto text-gray-700 border p-3 rounded-md bg-gray-50" }, 
            React.createElement('p', null, loremIpsum)
        )
      ]}),

      React.createElement(Card, { title: "About This Application", children: [
        React.createElement('ul', { className: "space-y-2 text-sm text-gray-700" },
          React.createElement('li', null, 
            React.createElement('strong', null, "Application Name: "), APP_NAME
          ),
          React.createElement('li', null, 
            React.createElement('strong', null, "Version: "), "1.0.0 (Mock)"
          ),
           React.createElement('li', null, 
            React.createElement('strong', null, "Organization: "), ORG_NAME
          ),
          React.createElement('li', null, 
            React.createElement('strong', null, "Website: "), 
            React.createElement('a', { href: ORG_WEBSITE, target: "_blank", rel: "noopener noreferrer", className: "text-brandSecondary hover:text-brandPrimary underline" }, ORG_WEBSITE)
          ),
          React.createElement('li', {className: "pt-2 text-xs"}, "This platform helps marketing teams leverage AI for client data analysis, recommendation generation, campaign building, and performance tracking.")
        )
      ]})
    )
  );
};

export default SettingsView;
