import "./App.css";
import Card from "./components/Card/Card";

import DanielPic from "./assets/image-daniel.jpg";

function App() {
  return (
    <div className="App">
      <Card
        image={DanielPic}
        name="Daniel Clifford"
        verified="Verified Graduate"
        description="I received a job offer mid-course, and the subjects I learned were
      current, if not more so, in the company I joined. I honestly feel I got
      every penny's worth."
        quote="I was an EMT for many years before I joined the bootcamp. I've been
        looking to make a transition and have heard some people who had an
        amazing experience here. I signed up for the free intro course and found
        it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was
        the best - and most grueling - time of my life. Since completing the
        course, I've successfully switched careers, working as a Software
        Engineer at a VR startup."
        color="#733fc8"
        width="460px"
        height="210px"
      />
      <Card
        image={DanielPic}
        name="Daniel Clifford"
        verified="Verified Graduate"
        description="I received a job offer mid-course, and the subjects I learned were
      current, if not more so, in the company I joined. I honestly feel I got
      every penny's worth."
        quote="I was an EMT for many years before I joined the bootcamp. I've been
        looking to make a transition and have heard some people who had an
        amazing experience here. I signed up for the free intro course and found
        it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was
        the best - and most grueling - time of my life. Since completing the
        course, I've successfully switched careers, working as a Software
        Engineer at a VR startup."
        color="pink"
        width="500px"
        height="310px"
      />
    </div>
  );
}

export default App;
