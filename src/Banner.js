import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Banner.css";
import requests from "./Requests";
import TypeWriter from "react-typewriter";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, number) {
    return string?.length > number
      ? string.substr(0, number - 1) + "..."
      : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          <TypeWriter typing={0.5}>
            {movie?.name || movie?.name || movie?.original_name}
          </TypeWriter>
        </h1>

        <h1 className="banner__description">
          <TypeWriter typing={0.8}>{truncate(movie?.overview, 150)}</TypeWriter>
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
