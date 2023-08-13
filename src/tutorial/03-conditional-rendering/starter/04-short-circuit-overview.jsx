import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("Susan");

  const someExample = text || "Hello World";

  return (
    <div>
      <h3>Falsy OR : {text || "Hello World"}</h3>
      <h3>Falsy AND : {text && "Hello World"}</h3>
      <h3>Falsy OR : {text || "Hello World"}</h3>
      <h3>Falsy AND : {text && "Hello World"}</h3>
      <h3>{someExample}</h3>
    </div>
  );
};
export default ShortCircuitOverview;
