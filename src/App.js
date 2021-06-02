import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ChildrenList from "./components/Home/ChildrenList";
import SeachChildPreference from "./components/SearchPatient/SeachChildPreference";
import LoginUser from "./components/Login/LoginUser";

import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={LoginUser} />
        <Route path="/home" exact component={ChildrenList} />
        <Route path="/searchChild" exact component={SeachChildPreference} />
        <Route path="/searchParent" exact component={SeachChildPreference} />
      </div>
    </Router>
  );
}

export default App;
