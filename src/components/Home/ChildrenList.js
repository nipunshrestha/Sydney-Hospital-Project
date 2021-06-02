import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar.js";
import { Link } from "react-router-dom";
import "./home.css";

export default function RecentPreferenceList() {
  const [preferences, setPreferences] = useState([]);

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedUser");
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      const token = `bearer ${user.data.token}`;
      const config = {
        headers: { Authorization: token },
      };
      axios
        .get("/api/child", config)
        .then((resposnse) => {
          setPreferences(resposnse.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div id="homepage">
      <Navbar />
      <div id="home">
        <h1> Heart Centre for Children</h1>
        <h2> All Children</h2>
        {preferences.map((preference) => (
          <ul>
            <li>
              <Link key={preference._id} to="/searchChild">
                {preference.last_name}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
