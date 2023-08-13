import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleValue = () => {
    // Current State

    // setValue((prevState) => {
    //   const newState = prevState + 1;
    //   console.log(newState);
    //   return newState;
    // });

    // Set Timeout

    setTimeout(() => {
      console.log("clicked button");
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <>
      <div>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={handleValue}>
          Increase
        </button>
      </div>
    </>
  );
};

export default UseStateGotcha;
