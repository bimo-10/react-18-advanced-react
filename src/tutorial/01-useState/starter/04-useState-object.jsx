import { useState } from "react";

const UseStateObject = () => {
  // Cara 1:

  // const [name, setName] = useState("Peter");
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState("Read books");

  // const handleJhon = () => {
  //   setName("Jhon");
  //   setAge(27);
  //   setHobby("Scream at the computer");
  // };

  // Cara 2:

  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    hobby: "Read Books",
  });

  const handleJhon = () => {
    setPerson({
      name: "Jhon",
      age: 27,
      hobby: "Scream at the computer",

      // Jika yang diganti cuma name aja

      // ...person,
      // name: "susan",
    });
  };

  const { name, age, hobby } = person;

  return (
    <>
      <div>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h4>Enjoys To: {hobby}</h4>
        <button type="button" className="btn" onClick={handleJhon}>
          Show Jhon
        </button>
      </div>
    </>
  );
};

export default UseStateObject;
