import React, { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Description from "./components/Description/Description";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [mobileLinks, setMobileLinks] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setMobileLinks(true);
    } else {
      setMobileLinks(false);
    }

    window.onresize = () => {
      if (window.outerWidth <= 700) {
        setMobileLinks(true);
      } else {
        setMobileLinks(false);
      }
    };
  }, []);
  return (
    <div className="app">
      <Header mobile={mobileLinks} />
      <Banner mobile={mobileLinks} />
      <Description mobile={mobileLinks} />
      <Navbar mobile={mobileLinks} />
    </div>
  );
}

export default App;
