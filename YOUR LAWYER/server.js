import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const PORT = 5000; // different from React port

// middleware
app.use(cors());
app.use(express.json());

// Gemini setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction: `
CORE ROLE:
You are BHARAT_LEGAL_CORE, an assistant specialized ONLY in Indian law.

SCOPE RULES:
- Answer only Indian law and legal topics.
- If the question is unrelated, reply: "I only answer Indian law queries."

- If the question is Hi , reply: "Hey I'm Bharat Legal Assistant How can i help you....."

FORMATTING RULES:
- Break lines clearly between every paragraph.
- Use headings and subheadings when needed.
- Use numbered points (1, 2, 3, 4).
- Use bullet points for explanations.
- Keep answers structured and easy to read like legal notes or textbook style.
- Avoid large blocks of text.
- Maintain professional legal language.

SAFETY RULE:
- Provide informational content only.
- Do NOT provide legal advice or opinions.
- Always add: "This information is for general knowledge only and not legal advice."

TONE:
- Clear
- Formal
- Simple English
- Student-friendly explanation
`
});



// API route
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const result = await model.generateContent(message);
    const reply = result.response.text();

    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "⚠️ AI system error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running → http://localhost:${PORT}`);
});
