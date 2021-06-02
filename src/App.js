import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import LineChart from "./components/Graph";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
function App() {
  const [dpmArrests, setDPMArrests] = useState([]);
  const [graphData, setGraphData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/arrests/1")
  //     .then((res) => res.json())
  //     .then((res) => setDPMArrests(res.oregon_crimes));
  // }, []);

  function onFormSubmit(yearvsCrime) {
    setDPMArrests(yearvsCrime);
    setGraphData([...graphData, yearvsCrime]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Map nameSS={"hello"} />
          <Navbar handleGraphSubmit={onFormSubmit} />
          <LineChart charData={graphData} legend="Crime Data" />
        </div>
      </header>
    </div>
  );
}

export default App;
