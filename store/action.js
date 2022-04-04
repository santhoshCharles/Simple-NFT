import * as types from "./types";
import { API_URL } from "../constant/ApiLinks";
import { apiCallFunction } from "./ApiCall";

export const getArtistApi = (payload) => async (dispatch, getState) =>
  dispatch(apiCallFunction(payload, "POST", API_URL.getArtist, setArtistList, ""));

export const getGenresApi = (payload) => async (dispatch, getState) =>
  dispatch(apiCallFunction(payload, "POST", API_URL.getGenresList, setGenresList, ""));

export const addGenersApi = (payload) => async (dispatch, getState) =>
  dispatch(apiCallFunction(payload, "POST", API_URL.getGenres, setGenresList, "Added successfully"));

export const editGenersApi = (payload, id) => async (dispatch, getState) =>
  dispatch(apiCallFunction({payload:payload, id: id}, "PUT", API_URL.getGenres, setGenresList, "Geners Updated successfully"));

export const deleteGenersApi = (payload) => async (dispatch, getState) =>
  dispatch(
    apiCallFunction(payload, "DELETE", API_URL.getGenres, setGenresList, "Deleted successfully")
  );

export const loginApi = (payload) => async (dispatch, getState) =>
  dispatch(apiCallFunction(payload, "POST", API_URL.login, setLoginDetails, "Access Granted"));

export const editProfileApi = (payload) => async (dispatch, getState) =>
  dispatch(
    apiCallFunction(payload, "POST", API_URL.editProfile, setLoginDetails, "Profile Updated successfully")
  );

  export const getArtistCountApi = () => async (dispatch, getState) =>
  dispatch(apiCallFunction([], "GET", API_URL.artistCount, setArtistCount, ""));

export const getGenresCountApi = () => async (dispatch, getState) => 
  dispatch( apiCallFunction([], "GET", API_URL.genresCount, setGenresCount, "") );

export const setArtistList = (payload) => ({
  type: types.GET_ARTIST_LIST,
  payload: payload,
});

export const setArtistCount = (payload) => ({
  type: types.GET_ARTIST_COUNT,
  payload: payload,
});

export const setGenresList = (payload) => ({
  type: types.GET_GENRES_LIST,
  payload: payload,
});

export const setLoginDetails = (payload) => ({
  type: types.SET_LOGIN_DETAILS,
  payload: payload,
});

export const setUserDetails = (payload) => ({
  type: types.SET_USER_DETAILS,
  payload: payload,
});

export const setGenresCount = (payload) => ({
  type: types.GET_GENRES_COUNT,
  payload: payload
})

export const setNft = (payload) => ({
  type: types.SET_NFT,
  payload: payload
})
