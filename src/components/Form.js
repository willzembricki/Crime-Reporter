import { useState, useEffect } from "react";

function Form() {
  const [stateID, setStateID] = useState("1");
  const [crimeID, setCrimeID] = useState("1");
  const [mArrests, setMArrests] = useState();
  const [fArrests, setFArrests] = useState();
  const [year, setYear] = useState();

  function handleSubmit() {
    fetch();
  }
  return (
    <div>
      <form onSubmit={() => handleSubmit}>
        <select onChange={(e) => setStateID(e.target.value)} required>
          <option value="1">Oregon</option>
          <option value="2">Arkansas</option>
          <option value="3">Iowa</option>
          <option value="4">Kansas</option>
          <option value="5">Colorado</option>
        </select>
        <select
          onChange={(e) => setCrimeID(e.target.value)}
          placeholder="Select Crime"
          required
        >
          <option value="1">Marijuana Possesion </option>
          <option value="2">Opium Possesion </option>
          <option value="3">Synthetic Possesion </option>
          <option value="4">Other Possesion </option>
          <option value="5">Marijuana Sales</option>
          <option value="6">Opium Sales </option>
          <option value="7">Synthetic Sales </option>
          <option value="8">Other Sales </option>
        </select>
        <input
          type="number"
          placeholder="Male Arrests"
          value={mArrests}
          onChange={(e) => setMArrests(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Female Arrests"
          value={fArrests}
          onChange={(e) => setFArrests(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
export default Form;
