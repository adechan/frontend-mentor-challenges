import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SocialMediaFollowers from "./components/SocialMediaFollowers/SocialMediaFollowers";
import SocialMediaOverview from "./components/SocialMediaOverview/SocialMediaOverview";
import { useDataLayerValue } from "./DataLayer";

function App() {
  const [{ isDarkMode }, dispatch] = useDataLayerValue();

  return (
    <div className={"app " + (isDarkMode ? "app__dark" : "app__light")}>
      <Header />
      <SocialMediaFollowers />
      <SocialMediaOverview />
    </div>
  );
}

export default App;
