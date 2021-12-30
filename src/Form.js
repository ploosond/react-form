import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    if (name && email) {
      const person = {
        id: new Date().getTime.toString(),
        name: name,
        email: email,
      };
      setPeople((people) => {
        return [...people, person];
      });
      setName("");
      setEmail("");
    } else {
      console.log("no inputs yet");
    }
  };

  return (
    <article>
      <form className="form">
        <div className="form-control">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleClick}>
          add person
        </button>
      </form>
      {people.map((person) => {
        const { id, name, email } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </article>
  );
}

export default Form;
