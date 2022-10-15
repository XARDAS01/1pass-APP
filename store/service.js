import { defineStore } from 'pinia';
import axios from 'axios';

export const useServiceStore = defineStore('serviceStore', {
  state: () => ({
    // serviceList: [
    //   { id: 1, name: 'facebook', password: 'pass', url: 'url' },
    //   { id: 2, name: 'twitter', password: 'pass', url: 'url' },
    //   { id: 3, name: 'vk', password: 'pass', url: 'url' }
    // ],
    serviceList: []
  }),
  getters: {
    get: (state) => state.serviceList,
    getServiceByName: (state) => {
      return (name) => state.serviceList.find((service) => service.name === name);
    },
    getLength (state) { return this.serviceList.length },
  },
  actions: {
    load (token) {
      axios
        .get('https://webapplication-1pass-api.herokuapp.com/api/v1/services', {
          params: { token }
        })
        .then(response => {
          if (response.data.code === 200 && response.data.message === "ok") {
            this.serviceList = response.data.payload;
          }

          console.log(response);
        })
        .catch(err => {
          console.log(err);
        })
    },
    add (service, token) {
      axios
        .post('https://webapplication-1pass-api.herokuapp.com/api/v1/services?token=' + token, service)
        .then(response => {
          if (response.data.code === 200 && response.data.message === "ok") {
            this.serviceList.push(service);
          }

          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    },
    delete (service, token) {
      axios
        .delete('https://webapplication-1pass-api.herokuapp.com/api/v1/services/' + service.id  + '?token=' + token)
        .then(response => {
          if (response.data.code === 200 && response.data.message === "ok") {
            this.serviceList.splice(this.serviceList.indexOf(service), 1);
          }

          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    },
  }
});