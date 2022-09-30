import axios from "axios";

// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  baseURL: "https://tasty-gaiters-mite.cyclic.app/",
  // baseURL: "http://localhost:4000/",
});

instance.interceptors.request.use(
  async (config: any) => {
    config.headers.authorization = localStorage.getItem("token") || "";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("ERROR");
    return {
      error: true,
      data: error,
    };
  }
);

// Where you would set stuff like your 'Authorization' header, etc ...
// # instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// Also add/ configure interceptors && all the other cool stuff

// # instance.interceptors.request...
export default instance;
