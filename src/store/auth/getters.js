export default {
  isLoggedIn(state) {
    return !!state.token;
  },
  authStatus(state) {
    return state.status;
  }
};
