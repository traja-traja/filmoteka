import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./Home";
import { AddMovie } from "./AddMovie";
import { MainNav } from "./MainNav";
import { Movies } from "./Movies";

import "./style.css";

const App = () => (
  <Router>
    <div className="container">
      <header>
        <h1>Filmotéka</h1>
        <MainNav />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/add-movie" exact>
            <AddMovie />
          </Route>
        </Switch>
      </main>
    </div>
  </Router>
);

render(<App />, document.querySelector("#app"));
