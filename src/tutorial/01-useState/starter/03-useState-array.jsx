import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleRemoveItem = (id) => {
    let newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id}>
            <h2>{name}</h2>
            <button type="button" onClick={() => handleRemoveItem(id)}>
              Remove Items
            </button>
          </div>
        );
      })}

      <button type="button" className="btn" onClick={() => setPeople([])}>
        Remove All
      </button>
    </>
  );
};

export default UseStateArray;
