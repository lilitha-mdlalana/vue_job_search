import { createStore } from "vuex";

export const state = () => ({
  isLoggedIn: false,
});
export const mutations = {
  LOGIN_USER(state) {
    state.isLoggedIn = true;
  },
};
const store = createStore({
  state,
  mutations,
  strict: process.env.NODE_ENV !== "production",
});
//State and Mutations
// 20
export default store;
