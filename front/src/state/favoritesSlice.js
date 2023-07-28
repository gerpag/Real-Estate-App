import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    setFavorites: (state, action) => {
      return action.payload;
    },
    addToFavorites: (state, action) => {
      const favorite = action.payload;
      state.push(favorite);
    },
    removeFromFavorites: (state, action) => {
      const favoriteId = action.payload;
      return state.filter((favorite) => favorite.id !== favoriteId);
    },
  },
});

export const { setFavorites, addToFavorites, removeFromFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
