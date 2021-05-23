import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeFavorite } from "../actions/favoriteActions";
//import { useHistory } from "react-router-dom";

const FavoriteMovieList = (props) => {
  //const favorites = [];
  //const { push } = useHistory();
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
                <span className="material-icons">
                  <input
                    type="button"
                    className="material-icons"
                    value="remove_circle"
                    onClick={() => handleRemoveFavorite(movie.id)}
                  />
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
