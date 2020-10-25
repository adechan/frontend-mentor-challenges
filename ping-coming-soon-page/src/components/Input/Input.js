import React, { useState } from "react";
import "./Input.css";

function Input() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleEmail = (event) => {
    event.preventDefault();

    setEmail(email);
    if (email === "" || validateEmail(email) === false) {
      setError("Please provide a valid email address");
      console.log(error);
    } else {
      setEmail("");
      setError("");
    }
  };

  return (
    <>
      <form className={"input " + (error ? "error" : null)}>
        <div className="input__outer">
          <input
            type="text"
            placeholder="Your email address..."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <p className={error ? "error_message" : null}>{error}</p>
        </div>

        <button type="submit" onClick={handleEmail}>
          Notify Me
        </button>
      </form>
    </>
  );
}

export default Input;
