import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card/Card";
import SwitchSlider from "./components/SwitchSlider/SwitchSlider";
import { selectIsAnnually, setAnnually } from "./features/app/appSlice";

function App() {
  const isAnnually = useSelector(selectIsAnnually);
  const dispatch = useDispatch();

  const [prices, setPrices] = useState(["19.99", "24.99", "39.99"]);

  const handlePress = useCallback(
    (event) => {
      if (event.keyCode === 39 || event.keyCode === 37) {
        dispatch(
          setAnnually({
            isAnnually: !isAnnually,
          })
        );
      }
    },
    [isAnnually, dispatch]
  );

  useEffect(() => {
    if (isAnnually === true) {
      setPrices(["199.99", "249.99", "399.99"]);
    } else {
      setPrices(["19.99", "24.99", "39.99"]);
    }

    window.addEventListener("keydown", handlePress);

    return () => {
      window.removeEventListener("keydown", handlePress);
    };
  }, [isAnnually, handlePress]);

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
          price={prices[0]}
          storage="500 GB"
          users="2"
          sendGB="3"
        />
        <Card
          title="Professional"
          price={prices[1]}
          storage="1 TB"
          users="5"
          sendGB="10"
          large="large"
        />
        <Card
          title="Master"
          price={prices[2]}
          storage="2 TB"
          users="10"
          sendGB="20"
        />
      </div>
    </div>
  );
}

export default App;
