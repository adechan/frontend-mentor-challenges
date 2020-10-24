import "./App.css";
import Illustration from "./components/Illustration/Illustration";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="app">
      <Header />
      <Input />
      <Illustration />
      <Footer />
    </div>
  );
}

export default App;
