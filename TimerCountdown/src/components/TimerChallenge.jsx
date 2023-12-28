/* eslint-disable */
import { useState, useRef } from "react";
import { styled } from "styled-components";

import ResultModal from "./ResultModal";

const TimerSection = styled.section`
  width: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 2rem auto;
  background: linear-gradient(#4df8df, #4df0f8);
  color: #221c18;
  box-shadow: 0 2px 8px rgba(35, 34, 34, 0.6);
  border-radius: 6px;

  & button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background: #12352f;
    color: #edfcfa;
    font-size: 1.2rem;
    cursor: pointer;
  }

  & button:hover {
    background: #051715;
  }

  & h2 {
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    color: #221c18;
  }

  & .active {
    animation: flash 1s infinite;
  }
`;

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleResetTimer() {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        result={"lost"}
        remainingTime={timeRemaining}
        targetTime={targetTime}
        resetTimer={handleResetTimer}
      />

      <TimerSection>
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : "undefined"}>
          {timerIsActive ? "Time is running... " : "Timer inactive"}
        </p>
      </TimerSection>
    </>
  );
}
