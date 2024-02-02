import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const toggle = useSelector((state) => state.counter.showToggle);

  const dispatch = useDispatch();

  function toggleHandler() {
    dispatch(counterActions.toggleCounter());
  }

  function incrementHandler() {
    dispatch(counterActions.increment());
  }

  function decrementHandler() {
    dispatch(counterActions.decrement());
  }

  function increaseHandler() {
    dispatch(counterActions.increase(5));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div>
        {toggle && <div className={classes.value}>{counter}</div>}
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase</button>
        <div>
          <button onClick={toggleHandler}>Toggle</button>
        </div>
      </div>
    </main>
  );
};

export default Counter;
