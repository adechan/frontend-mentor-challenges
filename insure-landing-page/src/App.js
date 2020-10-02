import React from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Description from "./components/Description/Description";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Description />
      <Navbar />
    </div>
  );
}

export default App;
