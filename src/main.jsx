import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Import react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Import components
import { Maps } from "./Components/Maps";
import { Home } from "./Components/Home";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/map">
          <Maps />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
