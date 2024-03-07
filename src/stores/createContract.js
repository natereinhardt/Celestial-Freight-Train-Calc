import { defineStore } from 'pinia'

export const createContractStore = defineStore('createContractStore', {
  state: () => ({
    loading: false,
    error: null,
    contractTo: 'Ven0m Ltd.'
  }),
  getters: {},
  actions: {}
})
