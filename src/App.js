import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movieTitles = ["Toy Story", "Mission Impossible", "IN TIME", "Star Wars"];

const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/519fFTj6QnL._SY450_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_.jpg",
  "https://static.tvtropes.org/pmwiki/pub/images/in_time_poster.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/sb_dolby_worldwide_handout_13x19_v3_lg_use_this_one_cc3cc869.jpeg?region=0%2C0%2C821%2C1200"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    );
  }
}

export default App;
