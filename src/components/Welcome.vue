<script setup>
import QuoteLineItem from '@/components/quote/QuoteLineItem.vue';
import { storeToRefs } from 'pinia';
import { estimationStore } from '@/stores/estimation';

const {
  maxVolume,
  maxCollateral,
} = storeToRefs(estimationStore());
</script>

<template>
  <div class="container welcome-container bg-gray-800 bg-opacity-10">
    <h3>Celestial Freight Train - A Celestial Empire Corporation</h3>
    <div>
      <br>
      <p>
        Please make all contracts to
        <a href="https://evemaps.dotlan.net/corp/Celestial%20Freight%20Train" target="_blank">Celestial Freight
          Train</a>.
        Select your outbound (station we are picking up from) and your inbound
        (station we are shipping to) from the available stations. Copy and paste
        the items you want delievered into the "Package Details" text-area below.
        Click "Run Qoute" to get a delivery quote. From there you can look at the
        mocked contract creation screens to streamline the ingame process.
      </p>
      <br>
      <p> If you have any questions - please reach out to Nate Armstrong (or Scott Armstrong) in game. </p>
      <br>
      <p>
        <i><b>NOTE: </b></i> To best serve you - please follow these rules. Failure to follow these rules will result in the team unable to run your
        contracts. If a single contract does not adhere to these rules, please try to break the contract into many.
      <ol class="bullets">
        <li>Do not have containers with or without items in them in your
          contract. Repackage any containers to be safe. Keep
          your courier contracts a flat as possible</li>
        <li>Keep each contract under the Max Collateral of {{maxCollateral.toLocaleString()}} isk</li>
        <li>Keep each contract under the Max Volume of {{maxVolume.toLocaleString()}} m³</li>
        <li>Put the Janice Code as the description of your contract</li>
      </ol>
      </p>

    </div>
  </div>
</template>

<style scoped>
.welcome-container {
  padding: 2em;
}

h3 {
  font-size: 1.2rem;
}
.bullets {
  padding-left:2em;
  list-style-type: circle;
}

</style>
