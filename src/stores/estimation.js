import { defineStore } from 'pinia';

export const estimationStore = defineStore('estimationStore', {
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
    jitaSellvalue: 0,
    minReward: 25000000,
    totalReward: 0,
    maxVolume: 300000,
    volume: 0,
    volumeMarkup: 1000,
    volumeCost: 0,
    maxCollateral: 0,
    totalCollateral: 0,
    collateral: 0,
    collateralCost: 0,
    estimation: null,
    janiceCode: null,
  }),
  getters: {
    getOutboundStations(state) {
      return () => {
        return this.availableStations.filter(
          (station) => this.inboundStation !== station
        );
      };
    },
    getInboundStations(state) {
      return () => {
        return this.availableStations.filter(
          (station) => this.outboundStation !== station
        );
      };
    },
  },

  //   ApiKey (apiKey)
  // Authorized
  // Contact kukki#3914 on discord to request an api key.

  // Name: X-ApiKey

  // In: header

  // Value: ******
  actions: {
    async getEstimation() {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
          'Accept': 'application/json',
        },
        body: this.items,
      };
      console.log(requestOptions)
      this.estimation = null;
      this.loading = true;
      try {
        console.log('FUCK');
        const response = await fetch(
          'https://janice.e-351.com/api/rest/v1/appraisal?key=BaSjUOMtnjzOyMllN92rJvUWgWdt8CRj&market=2&designation=appraisal&pricing=sell&persist=true&compactize=true&pricePercentage=1',
          requestOptions
        );
        const { totalBuyPrice, code, totalVolume } = await response.json()
        this.volume = totalVolume;
        this.janiceCode = code;
        console.log(totalBuyPrice);
      } catch (error) {
        console.log(error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
