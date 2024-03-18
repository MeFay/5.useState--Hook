import Counter from "./Counter";
import "./App.css";
import MyComponent from "./MyComponent";

// React Hook its a special function that allows functional components to use React features without writing class components
//(useState, useEffect, useContext, useReducer, useCallback, etc)

//useState() its a react hook that allows the creation of a stateful variable AND a setter functioon to update its value in the Virtual DOM
//[name, setName]

function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

export default App;
