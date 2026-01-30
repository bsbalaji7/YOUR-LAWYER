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
  CORE ROLE: You are BHARAT_LEGAL_CORE.
  Only answer Indian law questions.
  Responses are informational only, not legal advice.
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
