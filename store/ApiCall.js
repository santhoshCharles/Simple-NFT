import axios from "axios";
import { BASE_LINK, API_URL } from "../constant/ApiLinks";
import { success, errorFunction } from "../component/Messages";
import { setItem, getItem } from "../utils/SessionStorage";

export const apiCallFunction =
  (payload, type, apiLink, dispatchFunction, succMessage) =>
  async (dispatch, getState) => {
    const headers = {
      authorization: `Bearer ${getItem("token")}`,
    };
    switch (type) {
      case "POST":
        axios
          .post(`${BASE_LINK}${apiLink}`, payload, {
            headers: headers,
          })
          .then((response) => {
            succMessage !== "" && success(succMessage);
            if (apiLink === API_URL.login) {
              setItem({ token: response.data.token }, "token");
              setItem({ token: response.data.refreshToken }, "refreshToken");
            }
            dispatch(dispatchFunction(response.data));
          })
          .catch(async function (error) {
            const { message } = error.response.data;
            if (message === "Token Expired" || message === "User not found") {
              await refreshTokenApi();
              dispatch(
                apiCallFunction(
                  payload,
                  type,
                  apiLink,
                  dispatchFunction,
                  succMessage
                )
              );
            } else {
              succMessage !== "" &&
                errorFunction("Somthing going wrong!. Try later");
            }
          });
        break;
      case "GET":
        axios
          .get(`${BASE_LINK}${apiLink}`, {
            headers: headers,
          })
          .then((data) => {
            dispatch(dispatchFunction(data.data));
          })
          .catch(async (error) => {
            const { message } = error.response.data;
            if (message === "Token Expired") {
              await refreshTokenApi();
              setItem({ token: newToken.token }, "token");
              setItem({ token: newToken.refreshToken }, "refreshToken");
              dispatch(
                apiCallFunction(
                  payload,
                  type,
                  apiLink,
                  dispatchFunction,
                  succMessage
                )
              );
            } else {
              errorFunction("Somthing going wrong!. Try later");
            }
          });
        break;
      case "PUT":
        axios
          .put(`${BASE_LINK}${apiLink}`, payload, {
            headers: headers,
          })
          .then((response) => {
            success(succMessage);
            dispatch(dispatchFunction(response.data));
          })
          .catch(async function (error) {
            const { message } = error.response.data;
            if (message === "Token Expired") {
              await refreshTokenApi();
              dispatch(
                apiCallFunction(
                  payload,
                  type,
                  apiLink,
                  dispatchFunction,
                  succMessage
                )
              );
            } else {
              errorFunction("Somthing going wrong!. Try later");
            }
          });
        break;
      case "DELETE":
        axios
          .delete(`${BASE_LINK}${apiLink}`, {
            headers: headers,
            data: {
              payload,
            },
          })
          .then((response) => {
            success(succMessage);
            dispatch(dispatchFunction(response.data));
          })
          .catch(async function (error) {
            const { message } = error.response.data;
            if (message === "Token Expired") {
              await refreshTokenApi();
              dispatch(
                apiCallFunction(
                  payload,
                  type,
                  apiLink,
                  dispatchFunction,
                  succMessage
                )
              );
            } else {
              errorFunction("Somthing going wrong!. Try later");
            }
          });
    }
  };

export const apiCallWithoutRedux = async (payload, type, apiLink) => {
  const headers = {
    refreshToken: `Bearer ${getItem("refreshToken")}`,
    authorization: `Bearer ${getItem("token")}`,
  };
  switch (type) {
    case "POST":
      try {
        const data = await axios.post(`${BASE_LINK}${apiLink}`, payload, {
          headers: headers,
        });
        return data.data;
      } catch (err) {
        const { message } = err.response.data;
        if (message === "Token Expired") {
          await refreshTokenApi();
          apiCallWithoutRedux(payload, type, apiLink);
        }
      }
  }
};

const refreshTokenApi = async () => {
  const newToken = await apiCallWithoutRedux([], "POST", API_URL.getNewToken);
  setItem({ token: newToken?.token }, "token");
  setItem({ token: newToken?.refreshToken }, "refreshToken");
  return true;
};
