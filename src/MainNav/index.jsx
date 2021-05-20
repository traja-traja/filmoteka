import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export const MainNav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>Domů</NavLink>
        </li>
        <li>
          <NavLink to="/filmy" activeClassName="active" exact>Filmy</NavLink>
        </li>
        <li>
          <NavLink to="/pridat-film" activeClassName="active" exact>Přidat Film</NavLink>
        </li>
      </ul>
    </nav>
  );
};
