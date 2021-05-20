import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";

import { MainNav } from "./MainNav";
import "./style.css";

const DUMMY_MOVIES = [
  { id: "m1", nazev: "Shrek", popis: "O zelené potvoře", imgUrl: "http..." },
  { id: "m2", nazev: "Titanic", popis: "O zelené potvoře", imgUrl: "http..." },
  { id: "m3", nazev: "Shrek", popis: "O zelené potvoře", imgUrl: "http..." },
];

const Home = () => {
  return <div>Domovská stránka</div>;
};

const Movies = () => {
  console.log({DUMMY_MOVIES});

  return (
    <>
      <h2>Přehled mých oblíbených filmů</h2>
      <ul>
        <li>
          <Link to="/detail-filmu/shrek">Shrek</Link>
        </li>
        <li>
          <Link to="/detail-filmu/titanic">Titanic</Link>
        </li>
        <li>
          <Link to="/detail-filmu/diktator">Diktátor</Link>
        </li>
      </ul>
    </>
  );
};

const AddMovie = () => {
  return <div>Formulář pro přidání filmu</div>;
};

const MovieDetail = () => {
  const { nazevFilmu } = useParams();

  return (
    <Card nadpis={`O filmu ${nazevFilmu}`}>
      <div>Podrobnosti...</div>
      <ul>
        <li>Rok natočení: 1990</li>
      </ul>
    </Card>
  );
};

/*
  Komponenta Card funguje jako tzv. "wrapper"
  Moje komponenta se stane wrapperem tehdy, když umí zobrazit JSX kód, který tat komponenta obaluje, př.:
  <Card>
    Vnitřní libovolně dlouhý JSX kód, jiné vlastní komponenty nebo HTML komponenty (=vnitřek), které jsou uvnitř komponenty Card
  </Card>

  Každá komponenta dostává hodnotu vnitřku v props.children, viz níže.
  Ve chvíli, kdy props.children používám pomocí {props.children} a zobrazím, vytvořím tak vlastní komponentu typu wrapper.
*/
const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.nadpis}</h2>
      {props.children}
    </div>
  );
};

// http://localhost:8080/ ..... path="/"
// http://www.vasprojekt.cz/filmy ...... path="/filmy"

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
            <Card nadpis="Domovská stránka">
              <Home />
            </Card>
          </Route>
          <Route path="/filmy" exact>
            <Movies />
          </Route>
          <Route path="/pridat-film" exact>
            <AddMovie />
          </Route>
          <Route path="/detail-filmu/:nazevFilmu" exact>
            <MovieDetail />
          </Route>
          <Route path="*">
            Bez ničeho
          </Route>
        </Switch>
      </main>
      <footer>
        <Card nadpis="Info box">Za zveřejněné informace neručíme.</Card>
      </footer>
    </div>
  </Router>
);

render(<App />, document.querySelector("#app"));
