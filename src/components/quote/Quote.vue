<script setup>
import QuoteLineItem from '@/components/quote/QuoteLineItem.vue';
import { mapState, storeToRefs } from 'pinia'
import { estimationStore } from '@/stores/estimation'

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
    collateralCost,
    janiceCode } = storeToRefs(estimationStore())

const { getTotalReward, getTotalCollateral, getVolumeCost, getCollateralCost, getMinReward, getMaxVolume, getMaxCollateral } = estimationStore()

</script>

<template>
    <div class="container reasoning-container bg-gray-800 bg-opacity-10">
        <h2>
            Quote
        </h2>

        <div class="border-t my-2">
            <h3 class="my-2 italic">
                Limits
            </h3>
        </div>
        <QuoteLineItem label='Min Reward:' :value='getMinReward()' subLabel="ISK" />
        <QuoteLineItem label='Max Volume:' :value='getMaxVolume()' subLabel="m^3" />
        <QuoteLineItem label='Max Collateral:' :value='getMaxCollateral()' subLabel="ISK" />

        <div class="border-t my-2">
            <h3 class="my-2 italic">
                Package Info
            </h3>
        </div>
        <QuoteLineItem label='Janice Code:' :value='janiceCode' />
        <QuoteLineItem label='From:' :value='outboundStation' />
        <QuoteLineItem label='To:' :value='inboundStation' />
        <QuoteLineItem label='Volume in Cubic Meters:' :value='volume' subLabel="m^3" />
        <QuoteLineItem label='Jita Sell Value:' :value='jitaSellValue' subLabel="ISK" />
        <QuoteLineItem label='Collateral:' :value='collateral' subLabel="ISK" />

        <div class="border-t my-2">
            <h3 class="my-2 italic">
                Totals
            </h3>
        </div>
        <QuoteLineItem label='Total Collateral:' :value='jitaSellValue' subLabel="ISK" />
        <QuoteLineItem label='Volume Cost:' :value='getVolumeCost()'  subLabel="ISK" />
        <QuoteLineItem label='Collateral Cost:' :value='getCollateralCost()' :tooltip="`${collateral} x ${collateralCostPercentage.toLocaleString()}`" subLabel="ISK" />
        <QuoteLineItem label='Total Reward:' :value='getTotalReward()' subLabel="ISK" />
    </div>

</template>

<style scoped>
h2 {
    font-size: 1.5rem;
    text-align: center;
}

h3 {
    font-size: 1.0rem;
}

.reasoning-container {
    width: 35em;
}
</style>
