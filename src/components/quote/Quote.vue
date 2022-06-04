<script setup>
import QuoteLineItem from '@/components/quote/QuoteLineItem.vue';
import { storeToRefs } from 'pinia';
import { estimationStore } from '@/stores/estimation';

const {
  outboundStation,
  inboundStation,
  jitaSellValue,
  totalReward,
  minReward,
  maxVolume,
  volume,
  volumeMarkup,
  volumeCost,
  maxCollateral,
  totalCollateral,
  collateralCostPercentage,
  collateral,
  janiceCode,
} = storeToRefs(estimationStore());

const {
  getTotalReward,
  getTotalCollateral,
  getVolumeCost,
  getCollateralCost,
  getMinReward,
  getMaxVolume,
  getMaxCollateral,
} = estimationStore();
</script>

<template>
  <div class="container reasoning-container bg-gray-800 bg-opacity-10">
    <h2>Quote</h2>

    <div class="border-t my-2">
      <h3 class="my-2 italic">Limits</h3>
    </div>
    <QuoteLineItem label="Min Reward:" :value="getMinReward()" subLabel="ISK" />
    <QuoteLineItem label="Max Volume:" :value="getMaxVolume()" subLabel="m³" />
    <QuoteLineItem label="Max Collateral:" :value="getMaxCollateral()" subLabel="ISK" />

    <div class="border-t my-2">
      <h3 class="my-2 italic">Package Info</h3>
    </div>
    <QuoteLineItem label="Janice Code:" :value="janiceCode" url="https://janice.e-351.com/a" />
    <QuoteLineItem label="From:" :value="outboundStation" />
    <QuoteLineItem label="To:" :value="inboundStation" />
    <QuoteLineItem label="Volume in Cubic Meters:" :value="volume" subLabel="m³" />
    <QuoteLineItem label="Jita Sell Value:" :value="jitaSellValue" subLabel="ISK" />
    <QuoteLineItem label="Collateral:" :value="collateral" :tooltip="`${jitaSellValue.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })} (Jita Sell Value) ISK`" subLabel="ISK" />
    <div class="border-t my-2">
      <h3 class="my-2 italic">Totals</h3>
    </div>
    <QuoteLineItem label="Total Collateral:" :value="jitaSellValue" :tooltip="`${jitaSellValue.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })} (Jita Sell Value) ISK`" subLabel="ISK" />
    <QuoteLineItem label="Collateral Cost:" :value="getCollateralCost()"
      :tooltip="`${collateral} (Collateral) x ${collateralCostPercentage.toLocaleString()} (Collateral Markup)`"
      subLabel="ISK" />
    <QuoteLineItem label="Volume Cost:" :value="getVolumeCost()"
      :tooltip="`${volume.toLocaleString()} (Volumn) x ${volumeMarkup} (Volume Markup)`" subLabel="ISK" />
    <QuoteLineItem label="Total Reward:" :value="getTotalReward().toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })" :tooltip="`( ${volume.toLocaleString()} (Volumn) x ${volumeMarkup} (Volume Markup) ) + ${minReward} (Min Reward) + ${getCollateralCost()} (Collateral Cost)`"
      subLabel="ISK" />
  </div>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
  text-align: center;
}

h3 {
  font-size: 1rem;
}

.reasoning-container {
  width: 35em;
}
</style>
