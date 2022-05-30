<script setup>
import Multiselect from '@vueform/multiselect'
import { mapState, storeToRefs } from 'pinia'
import { estimationStore } from '@/stores/estimation'
// import { ref } from 'vue'

const { outboundStation, inboundStation, items, outboundStations, inboundStations } = storeToRefs(estimationStore())

</script>

<template>
    <div class="container estimation-container  bg-gray-800 bg-opacity-10">
        <h3>
            Estimation

        </h3>
        <div>
            Select the outbound and inbound stations

        </div>
        <div>
            Outbound (Station From):
            <Multiselect class="bg-gray-800 bg-opacity-10" v-model="outboundStation" :options="outboundStations" />
        </div>
        <div>
            Inbound (Station To):
            <Multiselect class="bg-gray-800 bg-opacity-10" v-model="inboundStation" :options="inboundStations" />
        </div>
        <div class="package-details-container">
            <div>Package Details:</div>
            <!-- <p style="white-space: pre-line;">{{ items }}</p> -->
            <textarea class="package-details" v-model="items" placeholder="Tritanium 1000 ..."></textarea>
            <button
                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Run Quote
            </button>
        </div>
    </div>

</template>
<style src="@vueform/multiselect/themes/default.css">
</style>
<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.estimation-container {
    width: 40em;
}

.package-details-container {
    width: 30em;
    height: 20em;
}

.package-details {
    width: 30em;
    height: 20em;
}
</style>
