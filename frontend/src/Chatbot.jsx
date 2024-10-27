import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./Chatbot.css";

// Initialize Google Generative AI API
const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm your financial Advisor! Ask me anything!",
      sentTime: "just now",
      sender: "Financial Advisor",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleSend = async (message) => {
    const userMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setUserInput("");
    setIsTyping(true);

    // Send the message to Gemini API and get the response
    await sendToGemini(updatedMessages);
  };

  const sendToGemini = async (chatMessages) => {
    try {
      const userMessage = chatMessages[chatMessages.length - 1].message;
      const result = await model.generateContent(userMessage);
      const response = await result.response;
      const geminiMessage = {
        message: response.text(),
        sender: "Financial Advisor",
      };
      setMessages((prevMessages) => [...prevMessages, geminiMessage]);
    } catch (error) {
      console.error("Error sending message to Gemini API", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: "Sorry, something went wrong.",
          sender: "Financial Advisor",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <MainContainer
      style={{
        height: "80vh",
      }}
    >
      <ChatContainer
        style={{
          height: "100%",
        }}
      >
        <MessageList
          scrollBehavior="smooth"
          typingIndicator={
            isTyping ? (
              <TypingIndicator content="Financial Advisor is typing" />
            ) : null
          }
        >
          {messages.map((message, i) => (
            <Message
              key={i}
              style={{ marginTop: "15px" }}
              model={{
                message: message.message,
                direction: message.sender === "user" ? "outgoing" : "incoming",
                sender: message.sender,
              }}
            />
          ))}
        </MessageList>
        <MessageInput
          placeholder="Type your message here"
          onSend={handleSend}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </ChatContainer>
    </MainContainer>
  );
};

export default Chatbot;
