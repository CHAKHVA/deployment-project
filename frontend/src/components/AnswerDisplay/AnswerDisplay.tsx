import { useEffect, useState } from "react";
import "./AnswerDisplay.css";

const AnswerDisplay = () => {
  const [answer, setAnswer] = useState<string>("");

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/latest-answer");
        const data = await res.json();
        setAnswer(data.data);
      } catch (err) {
        console.error("Error fetching answer:", err);
      }
    };

    fetchLatest();
    const interval = setInterval(fetchLatest, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <h2 className="title">Latest Submitted Answer</h2>
      <span id="answer" className="answer-text">
        {answer || "No answer yet"}
      </span>
    </div>
  );
};

export default AnswerDisplay;
