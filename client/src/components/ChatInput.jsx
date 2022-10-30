import React, { useState } from "react";

const ChatInput = () => {
  const [textArea, setTextArea] = useState(null);
  return (
    <div className="chat-input">
      <textarea
        value={textArea == null ? "" : textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button className="secondary-button">Gửi</button>
    </div>
  );
};

export default ChatInput;
