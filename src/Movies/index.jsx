import React from "react";
import { Link } from "react-router-dom";

export const Movies = () => {
  return <div>
    <h2>Sbírka filmů</h2>
    <ul>
      <li><Link to="/movie-detail/shrek">Shrek</Link></li>
      <li><Link to="/movie-detail/mission-impossible">Mission: Impossible</Link></li>
      <li><Link to="/movie-detail/titanic">Titanic</Link></li>
    </ul>
    </div>
};
