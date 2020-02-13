export default {
  authRequest(state) {
    state.status = "loading";
  },
  authSuccess(state, { token, user }) {
    state.status = "success";
    state.token = token;
    state.user = user;
  },
  authError(state) {
    state.status = "error";
  },
  logout(state) {
    state.status = null;
    state.token = null;
  }
};
