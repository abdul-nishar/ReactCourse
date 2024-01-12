import { useContext } from "react";

import Answer from "./Answer";
import QuestionsArray from "../questions";
import QuestionTimer from "./QuestionTimer";
import { QuizContext } from "../store/QuizContext";

export default function Question() {
  const { activeQuestionIndex, answerState } = useContext(QuizContext);
  let timer = 10000;
  if (answerState === "answered") timer = 1000;
  if (answerState === "correct" || answerState === "wrong") timer = 2000;

  return (
    <div id="question">
      <QuestionTimer key={timer} timeout={timer} />
      <h2>{QuestionsArray[activeQuestionIndex].text}</h2>
      <Answer />
      <div id="skip-action">
        <button>Skip</button>
      </div>
    </div>
  );
}
