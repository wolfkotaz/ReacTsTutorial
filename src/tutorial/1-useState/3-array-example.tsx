import React, { useState } from "react";

const tempNames: string[] = ["Grzegorz", "Jakub", "Damian", "Anna"];

const ArrayExample = () => {
  const [names, setNames] = useState<string[]>(tempNames);

  const handleOnSort = () => {
    setNames([...names.sort()]);
  };

  return (
    <div className="users-container">
      {names.map((name: string) => {
        return <h2 key={name}>{name}</h2>;
      })}

      <button type="button" className="btn" onClick={handleOnSort}>
        Sort
      </button>
    </div>
  );
};

export default ArrayExample;
