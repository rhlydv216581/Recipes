import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com/",
});

// Request interceptor
instance.interceptors.request.use(
  function (config) {
    console.log("REQUEST:", config.method, config.url);
    return config;
  },
  function (error) {
    console.log("REQUEST ERROR:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  function (response) {
    console.log("RESPONSE:", response.status, response.data);
    return response;
  },
  function (error) {
    console.log("RESPONSE ERROR:", error);
    return Promise.reject(error);
  }
);

export default instance;