import React, { FormEvent, MouseEvent, useState } from "react";

const BasicExample = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    e.preventDefault();

    console.log("name: ", name);
    console.log("surname: ", surname);
    console.log("password: ", password);
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="name"
          value={name}
          onInput={handleInput}
          placeholder="Name"
        />

        <input
          type="text"
          name="surname"
          value={surname}
          onInput={(e) => setSurname(e.currentTarget.value)}
          placeholder="Surname"
        />

        <input
          type="password"
          name="password"
          value={password}
          onInput={(e) => setPassword(e.currentTarget.value)}
          placeholder="Password"
        />

        <button type="submit" onClick={handleSubmit} className="btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default BasicExample;
