import React from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import Card from "./components/Card/Card";
import SwitchSlider from "./components/SwitchSlider/SwitchSlider";

function App() {
  return (
    <div className="app">
      <div className="app__title">
        <h2>Our Pricing</h2>
        <div className="app__options">
          <p>Annually</p>
          <SwitchSlider />
          <p>Monthly</p>
        </div>
      </div>

      <div className="app__cards">
        <Card
          title="Basic"
          price="19.99"
          storage="500 GB"
          users="2"
          sendGB="3"
        />
        <Card
          title="Professional"
          price="24.99"
          storage="1 TB"
          users="5"
          sendGB="10"
          large="large"
        />
        <Card
          title="Master"
          price="39.99"
          storage="2 TB"
          users="10"
          sendGB="20"
        />
      </div>
    </div>
  );
}

export default App;
