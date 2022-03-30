import axios from "axios";
import { BASE_LINK, API_URL } from "../constant/ApiLinks";
import { success, errorFunction } from "../component/Messages";

export const apiCallFunction =
  (payload, type, apiLink, dispatchFunction, succMessage) =>
  async (dispatch, getState) => {
    console.log("data", payload, type, apiLink, dispatchFunction);
    switch (type) {
      case "POST":
        axios
          .post(`${BASE_LINK}${apiLink}`, payload)
          .then((response) => {
            console.log(response);
            succMessage !== "" && success(succMessage);
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

export const apiCallWithoutRedux = async (payload, type, apiLink) => {
  switch (type) {
    case "POST":
      const data = await axios.post(`${BASE_LINK}${apiLink}`, payload);
      return data.data;
  }
};
