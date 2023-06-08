import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkFrontmatter from 'remark-code-frontmatter';

import './App.css';

function ChatbotAnswer({ message }) {
  return (
    <>
      <ReactMarkdown remarkPlugins={[remarkFrontmatter]}>{message.answer}</ReactMarkdown>
      <div className="react-chatbot-documents">
        <ul>
          <li>Sources:</li>
          {
            message.source_documents.map(source_document =>
            <li key={source_document.source}><a href={'file:///' + source_document.source} target="_blank" rel="noreferrer">{source_document.fileName}</a></li>
          )}
        </ul>
      </div>
    </>
    
  );
}

export default ChatbotAnswer;
