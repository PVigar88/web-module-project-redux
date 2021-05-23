export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITES";

export const addFavorite = (newFavorite) => {
  return { type: ADD_FAVORITE, payload: newFavorite };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};

export const toggleFavorites = () => {
  return { type: TOGGLE_FAVORITES };
};
