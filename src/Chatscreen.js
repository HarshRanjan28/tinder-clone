import React, { useState } from "react";
import "./Chatscreen.css";
import Avatar from "@material-ui/core/Avatar";
const Chatscreen = () => {
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  const [messages, setMessages] = useState([
    {
      name: "kylie Jenner",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/Kylie_Jenner_in_2021.jpg",
      message: "Hows it going!",
    },
    {
      name: "kendel Jenner",
      image:
        "https://www.wonderwall.com/wp-content/uploads/sites/2/2021/11/kendall-jenner-2010.jpg",
      message: "how re you!",
    },
    {
      name: "Aastha Shah",
      image:
        "https://bollywoody.in/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-11-at-15.20.54-930x1024.jpeg",
      message: "I really love you",
    },
    {
      message: "Can we meet today to talk  about this.",
    },
  ]);

  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">You matched with aastha shah</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen_message">
            <Avatar className="chatScreen_image">
              alt={message.name}
              src={message.image}
            </Avatar>
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <p className="chatScreen_textUser">{message.message}</p>
        )
      )}
      <form className="chatScreen_input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen_inputfield"
          type="text"
          placeholder="Type your message here"
        />
        <button type="submit" onClick={handleSend} className="btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatscreen;
