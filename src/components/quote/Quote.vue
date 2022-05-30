<script setup>
import QuoteLineItem from '@/components/quote/QuoteLineItem.vue';
import { mapState, storeToRefs} from 'pinia'
import { estimationStore } from '@/stores/estimation'

const { outboundStation, inboundStation } = storeToRefs(estimationStore())

// });

</script>

<template>
    <div class="container reasoning-container bg-gray-800 bg-opacity-10">
        <h3>
            Quote
        </h3>
        <QuoteLineItem label='From:' :value='outboundStation' />
        <QuoteLineItem label='To:' :value='inboundStation' />
        <QuoteLineItem label='Volume in Cubic Meters (m^3):' value='' />
        <QuoteLineItem label='Jita Sell Value:' value='' />
        <QuoteLineItem label='Collateral:' value='' />
        <QuoteLineItem label='Min Reward:' value='' />
        <QuoteLineItem label='Max Volume:' value='' />
        <QuoteLineItem label='Max Collateral:' value='' />
        <QuoteLineItem label='Total Reward:' value='' />
        <QuoteLineItem label='Total Collateral:' value='' />
        <QuoteLineItem label='Volume Cost:' value='' />
        <QuoteLineItem label='Collateral Cost:' value='' />
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
