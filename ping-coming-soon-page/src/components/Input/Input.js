import React from "react";
import "./Input.css";

function Input() {
  const handleEmail = (event) => {
    event.preventDefault();
  };
  return (
    <form className="input">
      <input type="text" placeholder="Your email address..." />
      <button onClick={handleEmail}>Notify Me</button>
    </form>
  );
}

export default Input;
