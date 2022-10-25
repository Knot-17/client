import React from "react";

import { ChatEngine } from "react-chat-engine";

const SupportChat = () => {
  return (
    <ChatEngine
      projectID={process.env.REACT_APP_CE_PROJECT_ID}
      userName="ninthu1999@gmail.com"
      userSecret="Ninthu_1999"
      height="calc(100vh - 12px)"
    />
  );
};

export default SupportChat;
