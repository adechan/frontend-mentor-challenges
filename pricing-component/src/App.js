import React from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="app">
      <h2 className="app__title">Our Pricing</h2>
      <div className="app__options">
        <p>Annually</p>
        {/* Toggler */}
        <p>Monthly</p>
      </div>

      <div className="cards">
        <Card />
      </div>
    </div>
  );
}

export default App;
