const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('dist')); // for React build

// ✅ NEVER hardcode key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction: `CORE ROLE: You are BHARAT_LEGAL_CORE...`
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    const result = await model.generateContent(message);
    const text = result.response.text();

    res.json({ reply: text });

  } catch (err) {
    res.status(500).json({ reply: "SYSTEM_ERROR: Check API key." });
  }
});

app.listen(PORT, () =>
  console.log(`Server running → http://localhost:${PORT}`)
);
