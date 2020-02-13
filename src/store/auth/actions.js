import authApi from "../api/auth";

export default {
  login({ commit }, payload) {
    commit("authRequest");

    const callback = authData => {
      commit("authSuccess", authData);
    };

    const callbackErr = () => {
      commit("authError");
    };

    authApi.login(payload, callback, callbackErr);
  },
  register({ commit }, payload) {
    commit("authRequest");

    const callback = authData => {
      commit("authSuccess", authData);
    };

    const callbackErr = () => {
      commit("authError");
    };

    authApi.register(payload, callback, callbackErr);
  },
  logout({ commit }) {
    commit("logout");
  }
};
