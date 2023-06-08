import React from 'react';
import ChatbotAnswer from './ChatbotAnswer';

// ActionProvider starter code
class ActionProvider {
  constructor(
   createChatBotMessage,
   setStateFunc,
   createClientMessage,
   stateRef,
   createCustomMessage,
   ...rest
 ) {
   this.createChatBotMessage = createChatBotMessage;
   this.setState = setStateFunc;
   this.createClientMessage = createClientMessage;
   this.stateRef = stateRef;
   this.createCustomMessage = createCustomMessage;
 }

 
 answerQuestion(question, message) {
  const chatBotMessage = this.createChatBotMessage(<ChatbotAnswer message={message} />);
  this.setState((prevState) => ({
    ...prevState,
    messages: [...prevState.messages, chatBotMessage],
    chat_history: [...prevState.chat_history, (question, message.answer)]
  }));
 }
}

export default ActionProvider;