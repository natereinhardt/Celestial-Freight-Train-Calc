<script async setup>
import Multiselect from '@vueform/multiselect';
import { storeToRefs } from 'pinia';
import { estimationStore } from '@/stores/estimation';
const {
  loading,
  error,
  outboundStation,
  inboundStation,
  quoteItems,
  outboundStations,
  inboundStations,
} = storeToRefs(estimationStore());
const { getInboundStations, getOutboundStations, getEstimation } =
  estimationStore();
</script>

<template>
  <div class="container estimation-container bg-gray-800 bg-opacity-10">
    <h2>Estimation</h2>
    <h3 class="italic my-1">Select the outbound and inbound stations</h3>
    <div>
      <div class="my-1">Outbound (Station From):</div>
      <Multiselect
        class="bg-gray-800 bg-opacity-10"
        v-model="outboundStation"
        :options="getOutboundStations()"
      />
    </div>
    <div>
      <div class="my-1">Inbound (Station To):</div>
      <Multiselect
        class="bg-gray-800 bg-opacity-10"
        v-model="inboundStation"
        :options="getInboundStations()"
      />
    </div>
    <div class="package-details-container">
      <div class="my-1">Package Details:</div>
      <textarea
        class="package-details"
        v-model="quoteItems"
        placeholder="Tritanium 1000 ..."
      ></textarea>
      <button
        class="quote-button text-white font-bold py-2 px-4 border-b-4"
        @click="getEstimation()"
        :disabled="
          inboundStation === '' || outboundStation === '' || quoteItems === ''
        "
      >
        Run Quote
      </button>
    </div>
  </div>
</template>
<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h2 {
  font-size: 1.5rem;
  text-align: center;
}

h3 {
  font-size: 1rem;
}

.estimation-container {
  width: 40em;
}

.package-details-container {
  width: 30em;
}

.package-details-container:text-area {
  resize: vertical;
  overflow: auto;
}

.package-details {
  color: black;
  width: 30em;
  height: 20em;
  padding: 0.5em;
}

.quote-button {
  background-color: var(--ccp-modal-top-border-color);
  border-color: var(--ccp-modal-top-border-color);
}

.quote-button:hover {
  /* background-color: var(--ccp-modal-top-border-color-hover); */
  border-color: var(--ccp-modal-top-border-color-hover);
}

.quote-button:disabled {
  /* background-color: var(--ccp-modal-top-border-color-hover); */
  background-color: grey;
  border-color: grey;
}
</style>
