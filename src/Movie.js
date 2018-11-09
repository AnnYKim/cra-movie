import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import LinesEllipsis from "react-lines-ellipsis";

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  };

  static defaultProps = {
    title: "(no data)",
    poster: "(no data)",
    genres: "(no data)",
    rating: "(no data)",
    summary: "(no data)"
  };

  render() {
    return (
      <div className="movie-item">
        {/* <div>
          <strong className="movie-info-title">포스터:</strong>
          <MoviePoster title={this.props.title} poster={this.props.poster} />
        </div>
        <div>
          <strong className="movie-info-title">타이틀:</strong>
          <p>{this.props.title}</p>
        </div>
        <div>
          <strong className="movie-info-title">평점:</strong>
          <p>
            <MovieRating rating={this.props.rating} />
          </p>
        </div>
        <div>
          <strong className="movie-info-title">장르:</strong>
          {this.props.genres.map(item => {
            return <MovieGenere genere={item} />;
          })}
        </div>
        <div>
          <strong className="movie-info-title">설명:</strong>
          <p>{this.props.summary}</p>
        </div> */}

        <div className="flex-row">
          <MoviePoster title={this.props.title} poster={this.props.poster} />
          <div className="movie-info-container">
            <MovieRanking ranking={this.props.index} />
            <div className="movie-info-title">{this.props.title}</div>
            <div className="movie-info-rating">
              <MovieStars rating={this.props.rating} />
              <p className="rating-number"> ({this.props.rating})</p>
            </div>
            <div className="movie-info-genere">
              {this.props.genres.map((item, index) => {
                return <MovieGenere key={index} genere={item} />;
              })}
            </div>
            <div className="movie-summary">
              {/* <p className="movie-sumamry-text">{this.props.summary}</p> */}
              {/* <p className="movie-sumamry-text"></p> */}
              <LinesEllipsis
                className="movie-sumamry-text"
                text={this.props.summary}
                maxLine="4"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const MovieRanking = ({ ranking }) => {
  let newRanking = ranking;
  newRanking++;
  return (
    <strong className="movie-ranking">
      {newRanking < 10 ? "0" + newRanking : newRanking}
    </strong>
  );
};

const MovieStars = ({ rating }) => {
  var ratingForStars = Math.round(rating); //1~2:별 1개, 3~4:별 2개, 5~6:별 3개, 7~8:별 4개, 9~10:별 5개
  let stars = "별 ?개";
  if (ratingForStars > 9) {
    stars = "star-5";
  } else if (ratingForStars > 7) {
    stars = "star-4";
  } else if (ratingForStars > 5) {
    stars = "star-3";
  } else if (ratingForStars > 3) {
    stars = "star-2";
  } else {
    stars = "star-1";
  }
  return <p className={`rating-stars ${stars}`} />;
};

const MoviePoster = ({ title, poster }) => {
  return (
    <div className="movie-poster">
      <img src={poster} alt={title} title={title} />
    </div>
  );
};

const MovieGenere = ({ genere }) => {
  return <span className="movie-genere-tag">#{genere}</span>;
};

MoviePoster.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

MovieGenere.propTypes = {
  genere: PropTypes.string.isRequired
};

export default Movie;
