import { combineReducers } from "redux";
import * as type from "./types";

const initializeStore = {
  artistList: [],
  genresList: [],
  loginDetails: {},
  selectedUserDetails: {},
  artistCount: null,
  genresCount: null,
  nft: [],
  token: null,
  refreshToken: null,
};

const reducer = (state = initializeStore, action) => {
  switch (action.type) {
    case type.GET_ARTIST_LIST:
      return { ...state, artistList: action.payload };
    case type.GET_GENRES_LIST:
      return { ...state, genresList: action.payload };
    case type.SET_LOGIN_DETAILS:
      return {
        ...state,
        loginDetails: action.payload.usersDetails,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
      };
    case type.SET_USER_DETAILS:
      return { ...state, selectedUserDetails: action.payload };
    case type.GET_ARTIST_COUNT:
      return { ...state, artistCount: action.payload.artistCount };
    case type.GET_GENRES_COUNT:
      return { ...state, genresCount: action.payload.genresCount };
    case type.SET_NFT:
      return { ...state, nft: action.payload };
    default:
      return state;
  }
};

const reducers = {
  reducers: reducer,
};

export default combineReducers(reducers);
