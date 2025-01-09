import { auth } from '~/plugins/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const state = () => ({
  user: null,
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

export const actions = {
  initAuth({ commit }) {
    onAuthStateChanged(auth, (user) => {
      commit('setUser', user ? { email: user.email, uid: user.uid } : null);
    });
  },
};
