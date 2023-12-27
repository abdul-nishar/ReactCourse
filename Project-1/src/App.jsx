import { useState } from "react";

import Header from "../components/Header";
import UserInput from "../components/UserInput";
import Result from "../components/Result";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = inputValues.duration > 0;

  function handleInputValues(event) {
    setInputValues((prevValues) => {
      return { ...prevValues, [event.target.name]: Number(event.target.value) };
    });
  }

  return (
    <>
      <Header />
      <UserInput onValueChange={handleInputValues} inputObj={inputValues} />
      {inputIsValid && <Result inputObj={inputValues} />}
      {!inputIsValid && (
        <p className="center">
          Please provide a duration which is greater than 0.
        </p>
      )}
    </>
  );
}

export default App;
