import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

export const MovieDetail = () => {
  const { id } = useParams(); // params.film

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://filmoteka-390f8-default-rtdb.europe-west1.firebasedatabase.app/movies/${id}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch((error) => {
        // console.error("Error:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Nahrávání filmu...</p>;
  } else if (movie === null) {
    return <p>Film nebyl nalezen.</p>;
  }

  return (
    <div className="movie">
      <h2>Podrobnosti o filmu</h2>
      <p>{movie.title}</p>
      <img src={movie.imgUrl} alt="" className="movie__image" />
    </div>
  );
};
