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

const yearAge = [
  {
    year: 2018,
    age: 26,
    event: "바디프로필 촬영"
  },
  {
    year: 2017,
    age: 25,
    event: "첫 회사생활"
  },
  {
    year: 2016,
    age: 24,
    event: "대학교 졸업"
  },
  {
    year: 2015,
    age: 23,
    event: "일본 교환학생"
  }
];

const menu = [
  {
    name: "로제 파스타",
    price: "13000"
  },
  {
    name: "양송이 스프",
    price: "6000"
  },
  {
    name: "고르곤졸라 피자",
    price: "22000"
  }
];

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          {movies.map(movie => {
            return <Movie title={movie.title} poster={movie.poster} />;
          })}
        </div>
        <div>
          {yearAge.map((item, idx) => {
            return (
              <div>
                {item.year}
                년에 나는 {item.age}
                살이었고, 가장 기억에 남는 추억은 {item.event}
                이야.
              </div>
            );
          })}
          {menu.map((item, idx) => {
            return (
              <p>
                {idx + 1}
                번째 메뉴인 {item.name}의 가격은 {item.price}
                원입니다.
              </p>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
