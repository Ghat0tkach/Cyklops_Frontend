import React, { useEffect, useRef, useState } from "react";
import cyklops from "@/public/cyklops.png";
import Image from "next/image";
import { AskQuestion } from "@/app/api/GetSummary";
import { ClockLoader } from "react-spinners";

const ConversationBox = ({ response }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [startConversation, setNewConversation] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const endRef = useRef();
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const testResponse = "economics";

  const handleSendMessage = async () => {
    if (newMessage == "") return null;
    try {
      setLoading(true);
      if (newMessage.trim() !== "") {
        setCurrentMessage(true);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: newMessage, sender: "user" },
        ]);
        const answer = await AskQuestion(testResponse, newMessage);
        setNewMessage("");

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: answer, sender: "cyklops" },
        ]);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setCurrentMessage(false);
      setLoading(false);
    }
  };
  const showStartMessage = () => {
    setMessages([
      ...messages,
      {
        text: `I am Cyklops an intelligently video/picture to text agent,Ask me anything About the Image or Video you provided.`,
        sender: "cyklops",
      },
    ]);
    setNewConversation(true);
  };

  return (
    <>
      <div className="conversation-box h-[30rem] overflow-y-scroll">
        <div className="messages">
          <div className="flex">
            <div className="max-w-[50px] overflow-hidden">
              <Image src={cyklops} width={50} height={50} />
            </div>

            <p className="m-1 bg-white float-left rounded-md w-1/2 p-5 text-black">
              {response}
            </p>
          </div>

          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.sender === "user"
                  ? "float-right clear-right bg-slate-400 rounded-md"
                  : "float-left"
              } p-2 text-black `}
            >
              {message.sender === "user" ? (
                <p className="rounded-md mb-5 w-[80%] p-2">{message.text}</p>
              ) : (
                <div className="flex">
                  <div className="max-w-[50px] overflow-hidden">
                    <Image src={cyklops} width={50} height={50} />
                  </div>

                  <p className="mb-5 bg-white float-left rounded-md w-1/2 p-5 text-black">
                    {message.text}
                  </p>
                </div>
              )}
              <div ref={endRef}></div>
            </div>
          ))}
        </div>
      </div>

      {startConversation ? (
        <div className="input-area text-center mt-10 rounded-sm border-black flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="p-5 rounded-md text-black bg-gray-50 w-[90%]"
          />
          <button
            onClick={handleSendMessage}
            className="rounded-[1rem] text-xs border-[3px] bg-slate-700 p-3 "
            disabled={currentMessage}
          >
            {loading ? <ClockLoader size={10} /> : <span>Send</span>}
          </button>
        </div>
      ) : (
        <div className=" text-center ">
          <button
            className="p-2 rounded-md border-black border-[1px] bg-yellow-50 text-black hover:scale-150 transition-all"
            onClick={showStartMessage}
          >
            Start Conversation!
          </button>
        </div>
      )}
    </>
  );
};

export default ConversationBox;
