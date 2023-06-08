import React from "react";
import { useState } from "react";
import { Icon } from '@fluentui/react/lib/Icon';
import config from './config.json';

const ChatHeader = () => {
  const [ queryParameters, setQueryParameters ] = useState(new URLSearchParams(window.location.search));

  const handleClick = () => {
    window.location.reload();
  };

  const handleCodeBaseChange = (event) => {
    queryParameters.set('code_base', event.target.value);
    setQueryParameters(queryParameters);
    window.history.replaceState({}, '', `${window.location.pathname}?${queryParameters}`);
    handleClick();
  };

  let codeBase = config['code_bases'][0];
  if (config['code_bases'].includes(queryParameters.get('code_base'))) {
    codeBase = queryParameters.get('code_base');
  }

  return (
    <div className="react-chatbot-kit-chat-header">
      ::AskTheCode::
      &nbsp;&nbsp;
      <select className="react-chatbot-kit-chat-header-select" onChange={handleCodeBaseChange} value={codeBase}>
        {
          config['code_bases'].map(code_base =>
            <option key={code_base} value={code_base}>{config['code_bases_label'][code_base]}</option>

        )}
      </select>
      <div className="react-chatbot-kit-chat-header-cleanup">
        <button type="button" onClick={handleClick}>
          <Icon iconName="Broom" className="icon" /> Clear Chat
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;