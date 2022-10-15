import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    token: null,
    status: null
  }),
  getters: {
    getToken: (state) => state.token,
    getStatus: (state) => state.status
  },
  actions: {
    registration (user) {
      axios
        .post('https://webapplication-1pass-api.herokuapp.com/api/v1/auth/registration', user)
        .then(response => {
          if (response.data.code === 200 && response.data.message === "User registered") {
            this.token = response.data.payload.token;
            this.status = "Token update";
          }

          console.log(response);
        })
        .catch(err => {
          console.log(err);
        })
    },
    login (user) {
      axios
        .post('https://webapplication-1pass-api.herokuapp.com/api/v1/auth/login', user)
        .then(response => {
          if (response.data.code === 200 && response.data.message === "ok") {
            this.token = response.data.payload.token;
            this.status = "Token update";
          }

          console.log(response);
        })
        .catch(err => {
          console.log(err);
        })
    },
    logout () {
      this.token = null;
      this.status = null;

      // axios
      //   .post('https://webapplication-1pass-api.herokuapp.com/api/v1/auth/login', user)
      //   .then(response => {
      //     if (response.data.code === 200 && response.data.message === "ok") {
      //       this.token = response.data.payload.token;
      //       this.status = "Token update";
      //     }

      //     console.log(response);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   })
    },
    userTokenUpdate (token) { this.token = token; },
  }
});