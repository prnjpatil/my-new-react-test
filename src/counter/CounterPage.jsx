import { useCallback } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const CounterPage = () => {

  //Define state of counter 
  const [counter, setCounter] = useState(0);

  const onHandleIncrement = useCallback(() => {
    if(counter < 10){
        setCounter(counter + 1);
    }
  }, [counter]);

  const onHandleDecrement = useCallback(() => {
    if(counter> 0){
        setCounter(counter - 1);
    }
  }, [counter]);

  return (
    <div>
      <h1>Counter Page</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={onHandleIncrement}>Increment</button>
      <button onClick={onHandleDecrement}>Decrement</button>
      <div>
        <Link to="/"> Click Here to go Home Page </Link>
      </div>
    </div>
  );
};

export default CounterPage;
