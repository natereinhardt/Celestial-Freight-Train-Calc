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
        <div>
            Volume in Cubic Meters (m^3):
        </div>
        <div>
            Jita Sell Value:
        </div>
        <div>
            Inbound (Station To):
        </div>
        <div>
            Collateral:
        </div>
        <div>
            Min Reward:
        </div>
        <div>
            Max Volume:
        </div>
        <div>
            Max Collateral:
        </div>
        <div>
            Total Reward:
        </div>
        <div>
            Total Collateral:
        </div>
        <div>
            Volume Cost:
        </div>
        <div>
            Collateral Cost:
        </div>
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
