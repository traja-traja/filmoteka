import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MainNav } from "./MainNav";
import { Home } from "./Home";
import { Movies } from "./Movies";
import { MovieDetail } from "./MovieDetail";
import { AddMovie } from "./AddMovie";

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
          <Route path="/movie-detail/:id" exact>
            <MovieDetail />
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
