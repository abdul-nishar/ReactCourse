import Header from "./components/Header";
import Quiz from "./components/Quiz";
import QuizContextProvider from "./store/QuizContext";

function App() {
  return (
    <QuizContextProvider>
      <Header />
      <main>
        <Quiz />
      </main>
    </QuizContextProvider>
  );
}

export default App;
