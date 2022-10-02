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