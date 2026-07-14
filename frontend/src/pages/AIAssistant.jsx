import { useState } from "react";
import api from "../services/api";

function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/ai/ask", {
        question,
      });

      setAnswer(res.data.answer);
    } catch (error) {
      console.error(error);
      alert("Unable to get AI response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h2>🤖 AI Medicine Assistant</h2>

      <p>
        Ask questions about medicines, dosage, side effects, or general health.
      </p>

      <textarea
        rows="6"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "15px",
        }}
        placeholder="Example: What is Paracetamol used for?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <br />

      <button
        onClick={askAI}
        style={{
          marginTop: "15px",
          padding: "10px 25px",
          cursor: "pointer",
        }}
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {answer && (
        <div
          style={{
            marginTop: "25px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h3>AI Response</h3>

          <p>{answer}</p>

          <hr />

          <small>
            Disclaimer: This response is for educational purposes only and is
            not a substitute for professional medical advice.
          </small>
        </div>
      )}
    </div>
  );
}

export default AIAssistant;