import QuizLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={QuizLogo} alt="A notebook with a pen" />
      <h1>React Quiz</h1>
    </header>
  );
}
