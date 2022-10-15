import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: null,
  }),
  getters: {
    get: (state) => state.user,
    getFullName: (state) => state.user.firstName + " " + state.user.lastName,
  },
  actions: {
    load (token) {
      axios
      .get('https://webapplication-1pass-api.herokuapp.com/api/v1/users', {
        params: { token }
      })
      .then(response => {
        if (response.data.code === 200 && response.data.message === "ok") {
          this.user = response.data.payload;
        }

        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
    },
    remove () { this.user = null }
  }
});