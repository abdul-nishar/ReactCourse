import { useState, useEffect, useContext } from "react";

import { QuizContext } from "../store/QuizContext";
export default function QuestionTimer({ timeout }) {
  const { skipAnswer, answerState } = useContext(QuizContext);
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(answerState === "" ? skipAnswer : null, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [answerState, skipAnswer, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timeout}
      className={answerState !== "" ? "answered" : ""}
    ></progress>
  );
}
