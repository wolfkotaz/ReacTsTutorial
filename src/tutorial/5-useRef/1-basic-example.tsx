import React, { useRef, MouseEvent } from "react";

const BasicExample = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const changeInnerText = (value: string) => {
    if (!headerRef.current) return;

    headerRef.current.innerText = value;
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!formRef.current) return;
    console.log(formRef);

    let values: string = "";

    Array.from(formRef.current).forEach((element: Element) => {
      if (element instanceof HTMLInputElement) {
        values += element.value + ", ";
      }
    });

    console.log(values);
  };

  return (
    <>
      <h2 ref={headerRef}>test</h2>
      <button
        type="button"
        className="btn"
        onClick={() => changeInnerText("witam")}
      >
        Change header
      </button>

      <form ref={formRef}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="surname" placeholder="Surname" />
        <input type="text" name="surname" placeholder="Surname" />

        <button type="submit" className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default BasicExample;
