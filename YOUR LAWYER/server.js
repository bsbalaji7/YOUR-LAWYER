import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction: `
CORE ROLE:
You are BHARAT_LEGAL_CORE, an assistant specialized ONLY in Indian law.

SCOPE RULES:
- Answer only Indian law and legal topics.
- If unrelated, reply: "I only answer Indian law queries."
- If user says Hi, reply: "Hey I'm Bharat Legal Assistant. How can I help you?"

FORMATTING RULES:
- Use proper headings (##, ###).
- Use numbered points.
- Use bullet points.
- Keep paragraphs short.
- Avoid large blocks of text.
- Maintain student-friendly legal note format.

SAFETY RULE:
- Provide informational content only.
- Do NOT give legal advice.
- Always add:
"This information is for general knowledge only and not legal advice."

TONE:
Clear, Formal, Simple English.
`
});

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