import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar.js";
import "./patientSearch.css";

export default function SeachChildPreference() {
  const [pID, setID] = useState(null);
  const [name, setName] = useState("");
  const [displayName, setDisplay] = useState("");
  const [gameDatas, setgameDatas] = useState([]);

  const handleSearchPreference = (e) => {
    e.preventDefault();
    setDisplay(name);
    const loggedUser = window.localStorage.getItem("loggedUser");
    if (loggedUser) {
      // const user = JSON.parse(loggedUser);
      // const token = `bearer ${user.data.token}`;
      // const config = {
      //   headers: { Authorization: token },
      // };
      axios
        .get(`/api/gameData/${pID}`)
        .then((resposnse) => {
          setgameDatas(resposnse.data);
          console.log(gameDatas);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div id="patient">
      <Navbar />
      <div id="search">
        <h1>Heart Centre for Children</h1>
        <h2>Search the child's information</h2>
        <form id="search_form" onSubmit={handleSearchPreference}>
          <div>
            Patient ID
            <input
              type="Number"
              name="ID"
              onChange={({ target }) => setID(target.value)}
            />
          </div>
          <div>
            Name
            <input
              type="text"
              name="name"
              onChange={({ target }) => setName(target.value)}
            />
          </div>

          <button id="btnSubmit" type="submit">
            Search
          </button>
        </form>
        <div>
          {displayName}
          {gameDatas.gameFeedBack.map((gameData, index) => (
            <ul key={index}>
              <li>
                Level :{}
                {gameData.screenName ? "Yes" : "No"}
              </li>
              <li>Feedback: {gameData.feedBack ? "Yes" : "No"}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
