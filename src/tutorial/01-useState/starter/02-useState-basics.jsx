import { useState } from "react";
import { Fragment } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <Fragment>
      <div>
        <h1>You clicked {count} times</h1>
        <button type="button" className="btn" onClick={handleClick}>
          Click me
        </button>
      </div>
    </Fragment>
  );
};

export default UseStateBasics;
