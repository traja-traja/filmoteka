import React from "react";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  const {film} = useParams(); // params.film

  return <div>
    <h2>Podrobnosti o filmu</h2>
    <p>{film}</p>
    </div>
};
