import * as types from "./types";
import axios from "axios";
import { BASE_LINK, API_URL } from "../constant/ApiLinks";
import { success, errorFunction } from "../component/Messages";

export const apiCallFunction =
  (payload, type, apiLink, dispatchFunction, succMessage) => async (dispatch, getState) => {
    console.log("data", payload, type, apiLink, dispatchFunction);
    switch (type) {
      case "POST":
        axios
          .post(`${BASE_LINK}${apiLink}`, payload)
          .then((response) => {
            console.log(response);
            success(succMessage);
            dispatch(dispatchFunction(response.data));
          })
          .catch(function (error) {
            errorFunction("Somthing going wrong!. Try later");
            console.log(error);
          });
        break;
      case "GET":
        axios
          .get(`${BASE_LINK}${apiLink}`)
          .then((data) => {
            dispatch(dispatchFunction(data.data));
          })
          .catch((error) => {});
        break;
      case "PUT":
        axios
          .put(`${BASE_LINK}${apiLink}`, payload)
          .then((response) => {
            console.log(response);
            success(succMessage);
            dispatch(dispatchFunction(response.data));
          })
          .catch(function (error) {
            errorFunction("Somthing going wrong!. Try later");
            console.log(error);
          });
        break;
      case "DELETE":
        axios
          .delete(`${BASE_LINK}${apiLink}`, {
            data: {
              payload,
            },
          })
          .then((response) => {
            console.log(response);
            success(succMessage);
            dispatch(dispatchFunction(response.data));
          })
          .catch(function (error) {
            errorFunction("Somthing going wrong!. Try later");
            console.log(error);
          });
    }
  };

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
