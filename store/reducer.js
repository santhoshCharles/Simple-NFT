import { combineReducers } from "redux";
import * as type from "./types";

const initializeStore = {
  artistList: [],
  genresList: [],
  loginDetails: {},
  selectedUserDetails: {},
  artistCount: null,
  genresCount: null
};

const reducer = (state = initializeStore, action) => {
  switch (action.type) {
    case type.GET_ARTIST_LIST:
      console.log('reducer', action)
      return { ...state, artistList: action.payload.artistList, artistCount: action.payload.artistCount };
    case type.GET_GENRES_LIST:
      return { ...state, genresList: action.payload.genresList, genresCount: action.payload.genresCount};
    case type.SET_LOGIN_DETAILS:
      return { ...state, loginDetails: action.payload };
    case type.SET_USER_DETAILS:
      console.log('action', action)
      return { ...state, selectedUserDetails: action.payload };
    default:
      return state;
  }
};

const reducers = {
  reducers: reducer,
};

export default combineReducers(reducers);
