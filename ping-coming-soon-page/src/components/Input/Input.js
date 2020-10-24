import React from "react";
import "./Input.css";

function Input() {
  return (
    <form className="input">
      <input type="text" placeholder="Your email address..." />
      <button>Notify Me</button>
    </form>
  );
}

export default Input;
