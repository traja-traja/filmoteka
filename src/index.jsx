import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MainNav } from "./MainNav";
import "./style.css";

const Home = () => {
  return <div>Home Page</div>;
};

const Movies = () => {
  return (
    <div>Sbírka filmů</div>
  );
};

const AddMovie = () => {
  return <div>Přidat Film</div>;
};

// http://localhost:8080/     path="/"
// http://localhost:8080/movies     path="/movies"

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
