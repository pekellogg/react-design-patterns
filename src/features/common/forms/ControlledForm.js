import React, { useEffect, useState } from "react";

export const ControlledForm = () => {
  const [nameInputError, setNameInputError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      setNameInputError("Name must be at least 2 characters");
    } else {
      setNameInputError("");
    }
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    console.log(age.current.value);
    console.log(hairColor.current.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      { nameInputError && <p>{ nameInputError }</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};