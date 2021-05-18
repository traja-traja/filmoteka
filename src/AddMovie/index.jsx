import React, { useRef } from "react";
import { useHistory } from "react-router";

export const AddMovie = () => {
  const titleRef = useRef();
  const imgUrlRef = useRef();
  const history = useHistory();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: titleRef.current.value,
      imgUrl: imgUrlRef.current.value,
    };

    fetch(
      "https://filmoteka-390f8-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then(() => {
        history.push("/movies");
        //console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <h2>Přidat Film</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Název filmu: <input type="text" ref={titleRef} />
          </label>
        </div>
        <div>
          <label>
            Obrázek filmu:
            <input type="text" ref={imgUrlRef} />
          </label>
        </div>
        <button type="submit">Uložit</button>
      </form>
    </>
  );
};
