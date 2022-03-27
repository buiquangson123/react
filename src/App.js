import "./App.css";
import Header from "./components/Header";
import Timer from "./components/timer/Timer";
import HackerNews from "./components/news/HackerNews";
import { Routes, Route } from "react-router-dom";
import Textarea from "./components/textarea/Textarea";
import Drop from "./components/dropdown/Drop";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Timer />}></Route>
        <Route path="/timer" element={<HackerNews />}></Route>
        <Route path="/textarea" element={<Textarea />}></Route>
        <Route path="/drop" element={<Drop />}></Route>
      </Routes>
    </div>
  );
}

export default App;
