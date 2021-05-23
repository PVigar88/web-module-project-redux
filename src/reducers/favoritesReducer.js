import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoriteActions";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case ADD_FAVORITE:
      const newFavorite = {
        ...action.payload,
        id: Date.now(),
      };
      return {
        ...state,
        favorites: [...state.favorites, newFavorite],
      };
    case REMOVE_FAVORITE:
      return {
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };

    default:
      return state;
  }
};

export default reducer;
