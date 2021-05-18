import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const transformData = (data) => {
  const movies = [];
  for (const key in data) {
    const movie = {
      id: key,
      ...data[key],
    };
    movies.push(movie);
  }
  return movies;
};

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://filmoteka-390f8-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(
          transformData(data)
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h2>Sbírka filmů</h2>
      <ul>
        {movies.map(movie => <li>
          <Link to={`/movie-detail/${movie.id}`}>{movie.title}</Link>
        </li>)}
        
      </ul>
    </div>
  );
};
