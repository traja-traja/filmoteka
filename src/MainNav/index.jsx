import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const MainNav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/">Domů</Link>
        </li>
        <li>
          <Link to="/movies">Filmy</Link>
        </li>
        <li>
          <Link to="/add-movie">Přidat film</Link>
        </li>
      </ul>
    </nav>
  );
};
