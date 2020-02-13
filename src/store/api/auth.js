import axios from "axios";

export default {
  login(payload, callback, callbackErr) {
    let endpoint = "http://localhost:3000/login";

    axios
      .post(endpoint, payload)
      .then(response => response.data)
      .then(data => callback(data))
      .catch(() => {
        localStorage.removeItem("token");
        callbackErr();
      });
  },
  register(payload, callback, callbackErr) {
    let endpoint = "http://localhost:3000/register";

    axios
      .post(endpoint, payload)
      .then(response => response.data)
      .then(data => {
        const token = data.token;

        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        callback(data);
      })
      .catch(() => {
        localStorage.removeItem("token");
        callbackErr();
      });
  },
  logout(callback) {
    localStorage.removeItem("token");
    delete axios.defaults.headers.commom["Authorization"];
    callback();
  }
};
