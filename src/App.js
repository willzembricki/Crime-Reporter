import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import LineChart from "./components/Graph";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Statecard from "./components/Statecard";
import Form from "./components/Form";

function App() {
  const [dpmArrests, setDPMArrests] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [labelArr, setLabelArr] = useState([]);
  const [displayState, setDisplayState] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3000/arrests/1")
  //     .then((res) => res.json())
  //     .then((res) => setDPMArrests(res.oregon_crimes));
  // }, []);

  const [seen, setSeen] = useState(false);
  function onFormSubmit(yearvsCrime) {
    setDPMArrests(yearvsCrime[0]);
    setGraphData([...graphData, yearvsCrime[0]]);
    setLabelArr([...labelArr, yearvsCrime[1]]);
  }
  function clearGraph() {
    setLabelArr([]);
    setGraphData([]);
  }
  function stateClicker(e) {
    fetch(`https://https://blooming-stream-80547.herokuapp.com/states/${e}`)
      .then((res) => res.json())
      .then((stateData) => setDisplayState(stateData));
  }
  function togglePop() {
    setSeen(!seen);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <Form /> */}
          <Map
            className="map"
            nameSS={"hello"}
            stateClicker={stateClicker}
            toggle={togglePop}
          />

          {seen ? (
            <Statecard toggle={togglePop} displayState={displayState} />
          ) : null}
          <Navbar handleGraphSubmit={onFormSubmit} clearGraph={clearGraph} />
          <LineChart
            className="chart"
            charData={graphData}
            legend="Crime Data"
            labelArr={labelArr}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
