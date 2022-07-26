import React from "react";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {

  return (
    <div className="cards-general">
      <div className="card-image">
      <img src={API_IMG+poster_path} alt="" />
      </div>
      <div className="card-info">
        <h1 className="title">{title}</h1>
        <h2>IMDb: {vote_average}</h2>
        <h3>Release Date: {release_date}</h3>
        <h4>{overview}</h4>
      </div>
    </div>
  );
};

export default MovieBox;
