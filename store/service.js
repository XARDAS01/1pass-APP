import { defineStore } from 'pinia';

export const useServiceStore = defineStore('serviceStore', {
  state: () => ({
    serviceList: [
      { id: 1, name: 'facebook', password: 'pass', url: 'url' },
      { id: 2, name: 'twitter', password: 'pass', url: 'url' },
      { id: 3, name: 'vk', password: 'pass', url: 'url' }
    ],
  }),
  getters: {
    get: (state) => state.serviceList,
    getServiceByName: (state) => {
      return (name) => state.serviceList.find((service) => service.name === name);
    },
    getLength (state) { return this.serviceList.length },
  },
  actions: {
    add (service) {
      try {
        this.serviceList.push(service);
        return true;
      } catch {
        return false;
      }
    },
    delete (service) {
      try {
        this.serviceList.splice(this.serviceList.indexOf(service), 1);
        return true;
      } catch {
        return false;
      }
    }
  }
});

export const useUserStore = defineStore('userStore', {
  state: () => ({
    name: 'James',
    surname: 'Smith',
    login: 'login',
    email: 'email@mail.com',
    password: 'pass',
    icon: 'icon',
  }),
  getters: {
    get: (state) => state,
    getFullName (state) { return this.name + ' ' + this.surname }
  },
  actions: { }
});