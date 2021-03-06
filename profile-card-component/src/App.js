import "./App.css";
import Card from "./components/Card/Card";

import VictorImage from "../src/assets/image-victor.jpg";

function App() {
  return (
    <div className="app">
      <Card
        image={VictorImage}
        name="Victor Crest"
        age="26"
        city="London"
        followers="80K"
        likes="803K"
        photos="1.4k"
      />
    </div>
  );
}

export default App;
