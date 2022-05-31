import { defineStore } from 'pinia';

export const createContractStore = defineStore('createContractStore',{
  state: () => ({
    loading: false,
    error: null,
    contractTo: 'Celestial Freight Train'
  }),
  getters: {
  },
    actions: {
} 
});
