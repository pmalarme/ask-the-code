import React from 'react';

import Chatbot from 'react-chatbot-kit';

import 'react-chatbot-kit/build/main.css';
import './App.css';

import { initializeIcons } from '@fluentui/font-icons-mdl2';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

initializeIcons();

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} placeholderText="Ask a question..." />
      </header>
    </div>
  );
}

export default App;
