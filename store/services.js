import { defineStore } from 'pinia';

const state = () => ({
  services: []
});

const getters = {};

const actions = {};

export const useServicesStore = defineStore('servicesStore', {
  state,
  getters,
  actions
});