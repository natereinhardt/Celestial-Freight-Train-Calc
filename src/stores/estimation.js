import { defineStore } from 'pinia';

export const estimationStore = defineStore('estimationStore',{
  state: () => ({
    loading: false,
    error: null,
    outboundStation: '',
    inboundStation: '',
    items: [],
    availableStations: [
        'Jita IV - Moon 4 - Caldari Navy Assembly Plant',
        'W4E-IT - The Troll Empire',
        'Y19P-1 - TIRE Sector Command Delta',
    ],
  }),
  getters: {
      getOutboundStations(state){
        return () => { return this.availableStations.filter((station) => this.inboundStation !== station)}
      },
      getInboundStations(state){
        return () => { return this.availableStations.filter((station) => this.outboundStation !== station) }
    }
  },
     actions: {
    async fetchPosts() {
      this.posts = []
      this.loading = true
      try {
        this.posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json()) 
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchPost(id) {
        this.post = null
        this.loading = true
        try {
          this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => response.json())
        } catch (error) {
          this.error = error
        } finally {
          this.loading = false
        }
      }
    } 
});
