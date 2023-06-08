import config from './config.json';

// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  async getAnswer(message) {
    let chat_history = [];
    if ('chat_history' in this.state) {
      chat_history = this.state.chat_history;
    }
    let queryParameters = new URLSearchParams(window.location.search);
    let codeBase = config['code_bases'][0];
    if (config['code_bases'].includes(queryParameters.get('code_base'))) {
      codeBase = queryParameters.get('code_base');
    }
    await fetch('http://127.0.0.1:5000/ask', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: message, chat_history: chat_history, code_base: codeBase })
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.actionProvider.answerQuestion(message, data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  parse(message) {
    this.getAnswer(message);
  }
}

export default MessageParser;