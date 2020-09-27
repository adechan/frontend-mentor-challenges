import React from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div className="app">
      <Description />
      <Reviews />
    </div>
  );
}

export default App;
