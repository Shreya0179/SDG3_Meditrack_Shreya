import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        message: "Question is required",
      });
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "tencent/hy3:free",
        messages: [
          {
            role: "system",
            content: `
You are MediTrack AI Assistant.

Your role is to answer only health and medicine-related questions.

You can answer:
- Medicine uses
- Dosage information
- Side effects
- Missed doses
- Storage of medicines
- General health tips

Rules:
1. Answer in simple English.
2. Keep answers under 120 words.
3. Never prescribe medicines.
4. Never diagnose diseases.
5. Always tell the user to consult a doctor for medical emergencies.
6. If the question is unrelated to health or medicines, politely say:
"I am MediTrack AI and I can only answer medicine and health-related questions."
`
          },
          {
            role: "user",
            content: question,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",

          // Optional but recommended by OpenRouter
          "HTTP-Referer": "http://localhost:5173",
          "X-Title": "MediTrack",
        },
      }
    );

    res.json({
      answer: response.data.choices[0].message.content,
    });
  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      message: "AI request failed",
    });
  }
});

export default router;