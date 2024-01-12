import ResultImage from "../assets/quiz-complete.png";
import Questions from "../questions";

export default function Summary({ answersArray }) {
  const skippedQuestions = Math.round(
    (answersArray.filter((answer) => answer === null).length /
      answersArray.length) *
      100
  );
  const correctQuestions = Math.round(
    (answersArray.filter(
      (answer, index) => answer === Questions[index].answers[0]
    ).length /
      answersArray.length) *
      100
  );

  return (
    <section id="summary">
      <img src={ResultImage} alt="A trophy" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p className="number">
          {skippedQuestions}%<span className="text">Skipped</span>
        </p>
        <p className="number">
          {correctQuestions}%<span className="text">Answered Correctly</span>
        </p>
        <p className="number">
          {100 - skippedQuestions - correctQuestions}%
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {Questions.map((question, index) => {
          let isCorrect;
          if (answersArray[index] === question.answers[0]) {
            isCorrect = "correct";
          } else if (answersArray[index] === null) {
            isCorrect = "skipped";
          } else isCorrect = "wrong";

          return (
            <li key={question.id}>
              <h3>{index + 1}</h3>
              <p className="question">{question.text}</p>
              <p className={`user-answer ${isCorrect}`}>
                {answersArray[index] ?? "Skipped"}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
