import { defineStore } from 'pinia'
import { getStations, getStaticData } from '@/services/googleSheetsService'
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
    minReward: 10000000,
    totalReward: 0,
    maxVolume: 300000,
    volume: 0,
    volumeMarkup: 1000,
    volumeCost: 0,
    maxCollateral: 6000000000,
    totalCollateral: 0,
    collateral: 0,
    collateralCostPercentage: 0.01,
    estimation: null,
    janiceCode: ''
  }),
  getters: {
    getOutboundStations() {
      return () => {
        return this.availableStations
          .filter((station) => this.inboundStation !== station.name)
          .map((station) => {
            return station.name
          })
      }
    },
    getInboundStations() {
      return () => {
        return this.availableStations
          .filter((station) => this.outboundStation !== station.name)
          .map((station) => {
            return station.name
          })
      }
    },
    getTotalReward() {
      return () => {
        const calculation = this.volumeMarkup * this.volume + this.collateralCost
        const ifElseReward = calculation > this.minReward ? calculation : this.minReward
        this.totalReward = parseFloat(ifElseReward)
        return (this.totalReward = parseFloat(ifElseReward))
      }
    },
    getVolumeCost() {
      return () => {
        return (this.volumeCost = this.volumeMarkup * this.volume)
      }
    },
    getCollateralCost() {
      return () => {
        return (this.collateralCost = this.jitaSellValue * this.collateralCostPercentage)
      }
    },
    getTotalCollateral() {
      const collateralCostPercentage = this.getCollateralCostPercentage()
      return () => {
        const calculation = collateralCostPercentage * this.collateral
        return (this.totalCollateral = Number.parseFloat(calculation))
      }
    },
    getMinReward() {
      return () => {
        let minReward = 1000000
        this.staticData.forEach((data) => {
          if (data.key === 'minReward') {
            minReward = parseFloat(data.value)
          }
        })
        this.minReward = minReward
        return minReward
      }
    },
    getMaxVolume() {
      return () => {
        let maxVolume = 300000
        this.staticData.forEach((data) => {
          if (data.key === 'maxVolume') {
            maxVolume = parseFloat(data.value)
          }
        })
        return maxVolume
      }
    },
    getMaxCollateral() {
      return () => {
        let maxCollateral = 6000000000
        this.staticData.forEach((data) => {
          if (data.key === 'maxCollateral') {
            maxCollateral = parseFloat(data.value)
          }
        })
        return maxCollateral
      }
    },
    getCollateralCostPercentage() {
      return () => {
        let collateralCostPercentage = 0.01
        this.staticData.forEach((data) => {
          if (data.key === 'collateralCostPercentage') {
            collateralCostPercentage = parseFloat(data.value)
          }
        })
        return collateralCostPercentage
      }
    },
    setStaticData() {
      return async () => {
        return (this.staticData = await getStaticData())
      }
    },
    setStations() {
      return async () => {
        return (this.availableStations = await getStations())
      }
    }
  },

  actions: {
    async getEstimation() {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
          Accept: 'application/json'
        },
        body: this.quoteItems
      }
      this.estimation = null
      this.loading = true
      try {
        const response = await fetch(
          'https://janice.e-351.com/api/rest/v1/appraisal?key=BaSjUOMtnjzOyMllN92rJvUWgWdt8CRj&market=2&designation=appraisal&pricing=sell&persist=true&compactize=true&pricePercentage=1',
          requestOptions
        )
        const { totalSellPrice, code, totalVolume, items } = await response.json()
        this.volume = totalVolume
        this.janiceCode = code
        this.jitaSellValue = totalSellPrice
        this.collateral = totalSellPrice
        this.items = items
        console.log(jitaSellValue)
      } catch (error) {
        console.log(error)
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})
