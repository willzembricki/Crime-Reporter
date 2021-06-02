import { useState } from "react";
import Select from "react-select";

function NavBar({ handleGraphSubmit }) {
  const [stateSelected, setStateSelected] = useState([]);
  const [crimeSelected, setCrimeSelected] = useState([]);

  const statesAvailable = [
    { value: "1", label: "Oregon" },
    { value: "2", label: "Arkansas" },
  ];
  const crimesAvailable = [
    { value: "1", label: "Drug Possesion - (Marijuana)" },
    { value: "2", label: "Drug Possession - (Opium)" },
  ];
  function handleStateSelections(e) {
    setStateSelected(e.map((val) => val.value));
  }
  function handleCrimeSelections(e) {
    setCrimeSelected(e.map((val) => val.value));
  }
  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/crimes/data/${stateSelected}/${crimeSelected}`)
      .then((res) => res.json())
      .then((res) => handleGraphSubmit(res));
    // fetch("http://localhost:9393/rounds", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({
    //     price: roundPrice,
    //     person_id: person.id,
    //     people_drinking: peopleDrinking,
    //   }),
    // }).then((res) => res.json())
    // .then(data => {
    //     onForceReload(data)}
    //     );
    // setRoundPrice("");
    // setPeopleDrinking([]);
    setStateSelected([]);
    setCrimeSelected([]);
  }
  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <Select
          style={{ color: "red" }}
          isMulti
          options={statesAvailable}
          onChange={handleStateSelections}
        />
        <Select
          style={{ color: "red" }}
          isMulti
          options={crimesAvailable}
          onChange={handleCrimeSelections}
        />
        <input type="submit" value="Get The Graph" />
      </form>
    </div>
  );
}
export default NavBar;
