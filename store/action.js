import * as types from './types';
import axios from 'axios';
import { BASE_LINK, API_URL } from '../constant/ApiLinks';
import { success, errorFunction } from "../component/Messages";

export const getArtistApi = ()=> async(dispatch, getState) => {
    axios
    .get(`${BASE_LINK}${API_URL.getArtist}`)
    .then((data ) => {
      dispatch(setArtistList(data.data));
    })
    .catch((error) => {
        
    });
}

export const getGenresApi = ()=> async(dispatch, getState) => {
    axios
    .get(`${BASE_LINK}${API_URL.getGenres}`)
    .then((data ) => {
      dispatch(setGenresList(data.data));
    })
    .catch((error) => {
        
    });
}

export const addGenersApi = (payload) => async(dispatch, getState) => {
  axios.post(`${BASE_LINK}${API_URL.getGenres}`, payload)
  .then( (response) => {
    console.log(response);
    success('Added successfully');
    dispatch(setGenresList(response.data))
  })
  .catch(function (error) {
    errorFunction("Somthing going wrong!. Try later");
    console.log(error);
  });
}

export const editGenersApi = (payload) => async(dispatch, getState) => {
  axios.put(`${BASE_LINK}${API_URL.getGenres}`, payload)
  .then( (response) => {
    console.log(response);
    success('Geners updated successfully');
    dispatch(setGenresList(response.data))
  })
  .catch(function (error) {
    errorFunction("Somthing going wrong!. Try later");
    console.log(error);
  });
}

export const deleteGenersApi = (payload) => async(dispatch, getState) => {
  axios.delete(`${BASE_LINK}${API_URL.getGenres}`, {
    data: {
      payload
    }
  })
  .then( (response) => {
    console.log(response);
    success('Geners deleted successfully');
    dispatch(setGenresList(response.data))
  })
  .catch(function (error) {
    errorFunction("Somthing going wrong!. Try later");
    console.log(error);
  });
}

export const loginApi = (payload) => async(dispatch, getState) => {
  axios.post(`${BASE_LINK}${API_URL.login}`, payload)
  .then( (response) => {
    console.log(response);
    success('Added successfully');
    dispatch(setLoginDetails(response.data))
  })
  .catch(function (error) {
    errorFunction('Unauthorized User');
    console.log(error);
  });
}

export const setArtistList = (payload) => ({ type: types.GET_ARTIST_LIST, payload: payload });

export const setGenresList = (payload) => ({ type: types.GET_GENRES_LIST, payload: payload });

export const setLoginDetails = (payload) => ({ type: types.SET_LOGIN_DETAILS, payload: payload });

setArtistList