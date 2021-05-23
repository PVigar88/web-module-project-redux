import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeFavorite } from "../actions/favoriteActions";

const FavoriteMovieList = (props) => {
  //const favorites = [];

  const handleRemoveFavorite = (id) => {
    props.removeFavorite(id);
  };

  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {props.favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <Link
              className="btn btn-light savedButton"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span>
                <span
                  className="material-icons"
                  onClick={() => handleRemoveFavorite(movie.id)}
                >
                  remove_circle
                </span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites,
  };
};

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);
