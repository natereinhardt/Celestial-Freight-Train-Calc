<script setup>
import QuoteLineItem from '@/components/quote/QuoteLineItem.vue';
import { mapState, storeToRefs } from 'pinia'
import { estimationStore } from '@/stores/estimation'

const {
    outboundStation,
    inboundStation,
    jitaBuyvalue,
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

const { getTotalReward, getTotalCollateral, getVolumeCost, getCollateralCost } = estimationStore()

</script>

<template>
    <div class="container reasoning-container bg-gray-800 bg-opacity-10">
        <h3>
            Quote
        </h3>
        <QuoteLineItem label='From:' :value='outboundStation' />
        <QuoteLineItem label='To:' :value='inboundStation' />
        <QuoteLineItem label='Volume in Cubic Meters:' :value='volume' subLabel="m^3" />
        <QuoteLineItem label='Jita Buy Value:' :value='jitaBuyvalue' subLabel="ISK" />
        <QuoteLineItem label='Collateral:' :value='collateral' subLabel="ISK" />
        <div class="border-t my-2">Limits</div>
        <QuoteLineItem label='Min Reward:' :value='minReward' subLabel="ISK" />
        <QuoteLineItem label='Max Volume:' :value='maxVolume' subLabel="m^3" />
        <QuoteLineItem label='Max Collateral:' :value='maxCollateral' subLabel="ISK" />
        <div class="border-t my-2">Totals</div>
        <QuoteLineItem label='Total Reward:' :value='getTotalReward()' subLabel="ISK" />
        <QuoteLineItem label='Total Collateral:' :value='jitaBuyvalue' subLabel="ISK" />
        <QuoteLineItem label='Volume Cost:' :value='getVolumeCost()' subLabel="ISK" />
        <QuoteLineItem label='Collateral Cost:' :value='getCollateralCost()' subLabel="ISK" />
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
    width: 35em;
}
</style>
