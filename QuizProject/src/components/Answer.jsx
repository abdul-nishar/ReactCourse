import { useContext, useRef } from "react";

import QuestionsArray from "../questions";
import { QuizContext } from "../store/QuizContext";

export default function Answer() {
  const shuffledAnswers = useRef();
  const { activeQuestionIndex, selectAnswer, answerState, answersArray } =
    useContext(QuizContext);

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...QuestionsArray[activeQuestionIndex].answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer, index) => {
        const isSelected = answersArray[answersArray.length - 1] === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={index} className="answer">
            <button
              onClick={() => selectAnswer(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
