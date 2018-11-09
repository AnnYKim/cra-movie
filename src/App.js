import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       movies: [
  //         {
  //           title: "Toy Story",
  //           poster:
  //             "https://images-na.ssl-images-amazon.com/images/I/519fFTj6QnL._SY450_.jpg"
  //         },
  //         {
  //           title: "Mission Impossible",
  //           poster:
  //             "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_.jpg"
  //         },
  //         {
  //           title: "IN TIME",
  //           poster:
  //             "https://static.tvtropes.org/pmwiki/pub/images/in_time_poster.jpg"
  //         },
  //         {
  //           title: "Star Wars",
  //           poster:
  //             "https://lumiere-a.akamaihd.net/v1/images/sb_dolby_worldwide_handout_13x19_v3_lg_use_this_one_cc3cc869.jpeg?region=0%2C0%2C821%2C1200"
  //         },
  //         {
  //           title: "TITANIC",
  //           poster:
  //             "https://images-na.ssl-images-amazon.com/images/I/71Asq17cUvL._RI_.jpg"
  //         }
  //       ]
  //     });
  //   }, 5000);
  // }

  state = {};

  componentDidMount() {
    this._getMovieList();
  }

  _callApi = () => {
    return fetch(
      "https://yts.am/api/v2/list_movies.json?sort_by=download_count"
    )
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  _getMovieList = async () => {
    const movieList = await this._callApi();
    this.setState({
      movies: movieList
    });
  };

  _renderMovies = () => {
    const movies = this.state.movies.map((item, index) => {
      console.log(this.state.movies);
      return (
        <Movie
          index={index}
          key={item.id}
          title={item.title}
          poster={item.large_cover_image}
          genres={item.genres}
          rating={item.rating}
          summary={item.summary}
        />
      );
    });
    return movies;
  };

  render() {
    const movies = this.state.movies;
    return (
      <div className={movies ? "App" : "App-loading"}>
        {movies ? (
          this._renderMovies()
        ) : (
          <p className="load-text">
            <div className="dot-container">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <span>Loading</span>
          </p>
        )}
      </div>
    );
  }
}

export default App;
