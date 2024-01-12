import { useContext } from "react";

import Question from "./Question";
import Questions from "../questions";
import { QuizContext } from "../store/QuizContext";
import Summary from "./Summary";

export default function Quiz() {
  const { activeQuestionIndex, answersArray } = useContext(QuizContext);
  const quizIsOver = activeQuestionIndex === Questions.length;

  return quizIsOver ? (
    <Summary answersArray={answersArray} />
  ) : (
    <section id="quiz">
      <Question key={activeQuestionIndex} />
    </section>
  );
}
