import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movies = [
  {
    title: "Toy Story",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/519fFTj6QnL._SY450_.jpg"
  },
  {
    title: "Mission Impossible",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_.jpg"
  },
  {
    title: "IN TIME",
    poster: "https://static.tvtropes.org/pmwiki/pub/images/in_time_poster.jpg"
  },
  {
    title: "Star Wars",
    poster:
      "https://lumiere-a.akamaihd.net/v1/images/sb_dolby_worldwide_handout_13x19_v3_lg_use_this_one_cc3cc869.jpeg?region=0%2C0%2C821%2C1200"
  }
];
class App extends Component {
  state = {
    greeting: "Hello!"
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: "Nice to meet you."
      });
    }, 5000);
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
          return (
            <Movie key={index} title={movie.title} poster={movie.poster} />
          );
        })}
      </div>
    );
  }
}

export default App;
