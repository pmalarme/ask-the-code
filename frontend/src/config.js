import { createChatBotMessage } from "react-chatbot-kit";

import ChatbotAvatar from "./ChatbotAvatar";
import ChatHeader from "./ChatHeader";

const config = {
  initialMessages: [createChatBotMessage(`AskTheCode anything`)],
  botName: "AskTheCode",
  customComponents: {
    botAvatar: (props) => <ChatbotAvatar {...props} />,
    header: (props) => <ChatHeader {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#034c85",
    },
    chatButton: {
      backgroundColor: "#034c85",
    },
  },
  state: {
    chat_history: []
  }
}

export default config