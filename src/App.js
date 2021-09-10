import "./App.css";
import { useState } from "react";
import LineChart from "./components/Graph";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Statecard from "./components/Statecard";

function App() {
  const [graphData, setGraphData] = useState([]);
  const [labelArr, setLabelArr] = useState([]);
  const [displayState, setDisplayState] = useState([]);

  const [seen, setSeen] = useState(false);
  function onFormSubmit(yearvsCrime) {
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
