import { useEffect } from "react";
import { privateAxios } from "../api/config/axios";
import UseUserContext from "./UseUserContext";

const UsePrivateAxios = () => {
  const { userInfo, setUserInfo } = UseUserContext();
  useEffect(() => {
    const requestInterceptor = privateAxios.interceptors.request.use(
      (request) => {
        if (!request.headers["authorization"]) {
          request.headers["authorization"] = `BEARER ${userInfo?.accessToken}`;
        }
        return request;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    const responseInterceptor = privateAxios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          setUserInfo({});
        }
        return Promise.reject(error);
      }
    );

    return () => {
      privateAxios.interceptors.request.eject(requestInterceptor);
      privateAxios.interceptors.response.eject(responseInterceptor);
    };
  }, []);
  return privateAxios;
};

export default UsePrivateAxios;
