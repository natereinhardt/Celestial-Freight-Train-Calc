import { defineStore } from 'pinia';
import { getStations, getStaticData } from '@/services/googleSheetsService';
export const estimationStore = defineStore('estimationStore', {
  state: () => ({
    loading: false,
    error: null,
    staticData: null,
    outboundStation: '',
    inboundStation: '',
    quoteItems: '',
    items: [],
    availableStations: null,
    jitaSellValue: 0,
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
    janiceCode: '',
  }),
  getters: {
    getOutboundStations(state) {
      return () => {
        return this.availableStations
          .filter((station) => this.inboundStation !== station.name)
          .map((station) => {
            return station.name;
          });
      };
    },
    getInboundStations(state) {
      return () => {
        return this.availableStations
          .filter((station) => this.outboundStation !== station.name)
          .map((station) => {
            return station.name;
          });
      };
    },
    getTotalReward(state) {
      return () => {
        return (this.totalReward =
          this.volumeMarkup * this.volume +
          this.minReward +
          this.collateralCost);
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
          this.jitaSellValue * this.collateralCostPercentage);
      };
    },
    getTotalCollateral(state) {
      const collateralCostPercentage = this.getCollateralCostPercentage();
      return () => {
        return (this.totalCollateral =
          collateralCostPercentage * this.jitaSellValue);
      };
    },
    getMinReward(state) {
      return () => {
        let minReward = 2500000;
        this.staticData.forEach((data) => {
          if (data.key === 'minReward') {
            minReward = parseFloat(data.value);
          }
        });
        return minReward;
      };
    },
    getMaxVolume(state) {
      return () => {
        let maxVolume = 300000;
        this.staticData.forEach((data) => {
          if (data.key === 'maxVolume') {
            maxVolume = parseFloat(data.value);
          }
        });
        return maxVolume;
      };
    },
    getMaxCollateral(state) {
      return () => {
        let maxCollateral = 4000000000;
        this.staticData.forEach((data) => {
          if (data.key === 'maxCollateral') {
            maxCollateral = parseFloat(data.value);
          }
        });
        return maxCollateral;
      };
    },
    getCollateralCostPercentage(state) {
      return () => {
        let collateralCostPercentage = 0.01;
        this.staticData.forEach((data) => {
          if (data.key === 'collateralCostPercentage') {
            collateralCostPercentage = parseFloat(data.value);
          }
        });
        return collateralCostPercentage;
      };
    },
    setStaticData(state) {
      return async () => {
        return (this.staticData = await getStaticData());
      };
    },
    setStations(state) {
      return async () => {
        return (this.availableStations = await getStations());
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
        const response = await fetch(
          'https://janice.e-351.com/api/rest/v1/appraisal?key=BaSjUOMtnjzOyMllN92rJvUWgWdt8CRj&market=2&designation=appraisal&pricing=sell&persist=true&compactize=true&pricePercentage=1',
          requestOptions
        );
        const { totalBuyPrice, code, totalVolume, items } =
          await response.json();
        this.volume = totalVolume;
        this.janiceCode = code;
        this.jitaSelValue = totalSellPrice;
        this.collateral = totalSellPrice;
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
