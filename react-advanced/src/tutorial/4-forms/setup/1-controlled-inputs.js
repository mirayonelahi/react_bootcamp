import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [person, setPerson] = useState({ name: "", email: "" });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    setPeople((prev) => {
      return [...prev, person];
    });
  };
  return (
    <>
      <form className="form" onSubmit={submitForm}>
        <div className="form-control">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={person.name}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input
            onChange={handleChange}
            type="text"
            name="email"
            id="email"
            value={person.email}
          />
        </div>
        <button className="submit">Add person</button>
      </form>
      {people.map((person) => {
        const { id, name, email } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
};

export default ControlledInputs;
