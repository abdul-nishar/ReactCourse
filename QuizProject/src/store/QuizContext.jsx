import { createContext, useCallback, useState } from "react";

import Questions from "../questions";

export const QuizContext = createContext();

export default function QuizContextProvider({ children }) {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      // ADD selected class to the button
      setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
      if (selectedAnswer === null) return;
      setAnswerState("answered");

      setTimeout(() => {
        // Check if the answer is correct or not
        if (selectedAnswer === Questions[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        // Add CSS classes depending upon the answer
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  const ctxValue = {
    answersArray: userAnswers,
    answerState,
    activeQuestionIndex,
    skipAnswer: handleSkipAnswer,
    selectAnswer: handleSelectAnswer,
  };

  return (
    <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>
  );
}
