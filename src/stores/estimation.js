import { defineStore } from 'pinia';

export const estimationStore = defineStore('estimationStore', {
  state: () => ({
    loading: false,
    error: null,
    outboundStation: '',
    inboundStation: '',
    quoteItems: null,
    items: [],
    availableStations: [
      'Jita IV - Moon 4 - Caldari Navy Assembly Plant',
      'W4E-IT - The Troll Empire',
      'Y19P-1 - TIRE Sector Command Delta',
    ],
    jitaBuyvalue: 0,
    minReward: 25000000,
    totalReward: 0,
    maxVolume: 300000,
    volume: 0,
    volumeMarkup: 1000,
    volumeCost: 0,
    maxCollateral: 4000000000,
    totalCollateral: 0,
    collateral: 0,
    collateralCostPercentage: 0.01,
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
    getTotalReward(state) {
      return () => {
        return (this.totalReward =
          this.volumeMarkup * this.volume + this.minReward + this.collateralCost);
      };
    },
    getVolumeCost(state) {
      return () => {
        return (this.volumeCost = this.volumeMarkup * this.volume);
      };
    },
    getCollateralCost(state) {
      return () => {
        return (this.collateralCost =
          this.jitaBuyvalue * this.collateralCostPercentage);
      };
    },
    getTotalCollateral(state) {
      return () => {
        return (this.totalCollateral =
          this.collateralCostPercentage * this.jitaBuyvalue);
      };
    },
  },

  actions: {
    async getEstimation() {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
          Accept: 'application/json',
        },
        body: this.quoteItems,
      };
      console.log(requestOptions);
      this.estimation = null;
      this.loading = true;
      try {
        console.log('FUCK');
        const response = await fetch(
          'https://janice.e-351.com/api/rest/v1/appraisal?key=BaSjUOMtnjzOyMllN92rJvUWgWdt8CRj&market=2&designation=appraisal&pricing=sell&persist=true&compactize=true&pricePercentage=1',
          requestOptions
        );
        const { totalBuyPrice, code, totalVolume, items } =
          await response.json();
        this.volume = totalVolume;
        this.janiceCode = code;
        this.jitaBuyvalue = totalBuyPrice;
        this.collateral = totalBuyPrice;
        this.items = items;
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
