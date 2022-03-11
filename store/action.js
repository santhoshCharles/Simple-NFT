import * as types from "./types";
import { API_URL } from "../constant/ApiLinks";
import { apiCallFunction } from "./ApiCall";

export const getArtistApi = () => async (dispatch, getState) =>
  dispatch(apiCallFunction([], "GET", API_URL.getArtist, setArtistList, ""));

export const getGenresApi = () => async (dispatch, getState) =>
  dispatch(apiCallFunction([], "GET", API_URL.getGenres, setGenresList, ""));

export const addGenersApi = (payload) => async (dispatch, getState) =>
  dispatch(apiCallFunction(payload, "POST", API_URL.getGenres, setGenresList, "Added successfully"));

export const editGenersApi = (payload) => async (dispatch, getState) =>
  dispatch(apiCallFunction(payload, "PUT", API_URL.getGenres, setGenresList, "Geners Updated successfully"));

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

export const setArtistList = (payload) => ({
  type: types.GET_ARTIST_LIST,
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
