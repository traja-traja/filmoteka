import React from "react";
import "./style.css";

export const MainNav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <a href="/">Domů</a>
        </li>
        <li>
          <a href="/movies">Filmy</a>
        </li>
        <li>
          <a href="/add-movie">Přidat film</a>
        </li>
      </ul>
    </nav>
  );
};
