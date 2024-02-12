import { useState, useCallback } from "react";
import axios from "axios";
import { LOCAL_STORAGE } from "../config/constant";
import { useDispatch } from "react-redux";
import AuthAction from "../store/admin/AuthSlice";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN);
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const dispatch = useDispatch();

  const sendRequest = useCallback(
    async (config) => {
      const {
        method = "GET",
        params = {},
        headers = {},
        body = {},
        url,
        contentType = "json",
      } = config;
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.request({
          url,
          method,
          params,
          headers,
          data: body
            ? contentType === "form-data"
              ? body
              : JSON.stringify(body)
            : {},
        });

        const data = response.data;
        setResponse(data);
        return data;
      } catch (err) {
        if (err.response.data.status === 401) {
          dispatch(AuthAction.logout());
        }
        setError(
          err.response.data.message || err.message || "Something went wrong!"
        );
        setResponse(err.response.data);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch]
  );
  return {
    isLoading,
    error,
    response,
    sendRequest,
  };
};

export default useHttp;
