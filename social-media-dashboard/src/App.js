import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SocialMediaFollowers from "./components/SocialMediaFollowers/SocialMediaFollowers";
import SocialMediaOverview from "./components/SocialMediaOverview/SocialMediaOverview";

function App() {
  return (
    <div className="app">
      <Header />
      <SocialMediaFollowers />
      <SocialMediaOverview />
    </div>
  );
}

export default App;
