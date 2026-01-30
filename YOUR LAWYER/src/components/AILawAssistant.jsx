import { useState, useEffect, useRef } from "react";
import styles from './AILawAssistant.module.css';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    const userText = input;
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();

      const botMsg = { text: data.reply, sender: "bot" };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Connection lost", sender: "bot" },
      ]);
    }

    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className={styles.chatContainer}>
      <h2>⚖️ Bharat Legal Assistant</h2>

      <div className={styles.chatDisplay}>
        {messages.map((msg, i) => (
          <div
  key={i}
  className={`${styles.message} ${
    msg.sender === "user" ? styles.me : styles.ai
  }`}
>
  <span className={styles.label}>
    {msg.sender === "user" ? "Me" : "AILawyer"}
  </span>

  {msg.text}
</div>
        ))}

        {loading && (
  <div className={`${styles.message} ${styles.ai}`}>
    <span className={styles.label}>AILawyer</span>
    Typing...
  </div>
)}
      </div>

      <div className={styles.inputArea}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Ask Indian law question..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
