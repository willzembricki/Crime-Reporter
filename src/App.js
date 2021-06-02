import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import LineChart from "./components/Graph";

function App() {
  const [dpmArrests, setDPMArrests] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/arrests/1")
      .then((res) => res.json())
      .then((res) => setDPMArrests(res.oregon_crimes));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <LineChart charData={dpmArrests} legend="Crime Data" />
        </div>
      </header>
    </div>
  );
}

export default App;
