import { useState } from "react";
import { chatbotFlow } from "./chatbotData";
import ChatMessage from "./ChatMessage";
import ChatOptions from "./ChatOptions";
import "./Chatbot.css";

export default function Chatbot() {
  const [step, setStep] = useState("start");
  const [open, setOpen] = useState(false);

  const current = chatbotFlow[step];

  return (
    <>
      {/* BOTÃO FLUTUANTE */}
      {!open && (
        <button className="chat-fab" onClick={() => setOpen(true)}>
          💬 Acessar o chat
        </button>
      )}

      {/* CHAT */}
      {open && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <span>Assistente</span>
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div className="chatbot-body">
            <ChatMessage message={current.message} />
          </div>

          <div className="chatbot-footer">
            <ChatOptions options={current.options} onSelect={setStep} />
          </div>
        </div>
      )}
    </>
  );
}
