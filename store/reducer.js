import { combineReducers } from "redux";
import * as type from "./types";

const initializeStore = {
  artistList: [],
  genresList: [],
  loginDetails: {},
};

const reducer = (state = initializeStore, action) => {
  switch (action.type) {
    case type.GET_ARTIST_LIST:
      return { ...state, artistList: action.payload };
    case type.GET_GENRES_LIST:
      return { ...state, genresList: action.payload };
    case type.SET_LOGIN_DETAILS:
      return { ...state, loginDetails: action.payload };
    default:
      return state;
  }
};

const reducers = {
  reducers: reducer,
};

export default combineReducers(reducers);
