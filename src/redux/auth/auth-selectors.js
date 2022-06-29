const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsername = (state) => state.auth.user.name;
const getIsFetching = (state) => state.auth.isFetching;
const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetching,
};
export default authSelectors;
