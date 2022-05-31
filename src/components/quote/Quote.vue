<script setup>
import QuoteLineItem from '@/components/quote/QuoteLineItem.vue';
import { mapState, storeToRefs } from 'pinia'
import { estimationStore } from '@/stores/estimation'

const { 
    outboundStation,
    inboundStation,
    jitaSellvalue,
    totalReward,
    minReward,
    maxVolume,
    volume,
    volumeMarkup,
    volumeCost,
    maxCollateral,
    totalCollateral,
    collateral,
    collateralCost } = storeToRefs(estimationStore())

// });

</script>

<template>
    <div class="container reasoning-container bg-gray-800 bg-opacity-10">
        <h3>
            Quote
        </h3>
        <QuoteLineItem label='From:' :value='outboundStation' />
        <QuoteLineItem label='To:' :value='inboundStation' />
        <QuoteLineItem label='Volume in Cubic Meters (m^3):' :value='volume' />
        <QuoteLineItem label='Jita Sell Value:' :value='jitaSellvalue' />
        <QuoteLineItem label='Collateral:' :value='jitaSellvalue' />
        <QuoteLineItem label='Min Reward (ISK):' :value='minReward' />
        <QuoteLineItem label='Max Volume:' :value='maxVolume' />
        <QuoteLineItem label='Max Collateral (ISK):' :value='maxCollateral' />
        <QuoteLineItem label='Total Reward (ISK):' :value='totalReward' />
        <QuoteLineItem label='Total Collateral (ISK):' :value='totalCollateral' />
        <QuoteLineItem label='Volume Cost (ISK):' :value='volumeCost' />
        <QuoteLineItem label='Collateral Cost (ISK):' :value='collateralCost' />
    </div>

</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.reasoning-container {
    width: 25em;
}
</style>
