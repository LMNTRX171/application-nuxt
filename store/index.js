export const getters = {
    isAuthenticated(state) {
      return state.auth.loggedIn;
    },
    loggedInUser(state) {
      console.log(state.auth.user);
      return state.auth.user;
    },
    adminCheck(state) {
      console.log(state.auth.user.role.name);
      return state.auth.user.role.name
    },
    managerCheck(state) {
      console.log(state.auth.user.role);
      return state.auth.user.role.name
    },
  };