import { useState } from "react";
import { StyledButton, StyledDiv, StyledH1 } from "./styles";

//update function is a function passed as an argument to setState()
//ex: setYear(year + 1) X -> setYear(updateFunction)
//This allows for safe updates bassed on the pevious state. It's typically used with multiple state updates and asynchronous functions.

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    //As we're using the current state to calculate the next state, the set function does not trigger an update because
    //React batches together state updates for performance reasons
    //setCount(count + 1);

    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <StyledH1>Counter: {count}</StyledH1>
      <StyledDiv>
        <StyledButton onClick={increment}>Increment</StyledButton>
        <StyledButton onClick={reset}>Reset</StyledButton>
        <StyledButton onClick={decrement}>Decrement</StyledButton>
      </StyledDiv>
    </>
  );
};

export default Counter;
