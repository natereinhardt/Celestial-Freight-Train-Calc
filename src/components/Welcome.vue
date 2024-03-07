<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { storeToRefs } from 'pinia';
import { estimationStore } from '@/stores/estimation';

const {
  maxVolume,
  maxCollateral,
} = storeToRefs(estimationStore());
</script>

<template>
  <div class="container welcome-container bg-gray-800 bg-opacity-10">
    <h3>Ven0m Ltd. - A Sons Of Bane Corporation</h3>
    <div class="content">
      <br>
      <p>
        Please make all contracts to
        <a href="https://evewho.com/corporation/98628586" target="_blank">Ven0m Ltd.</a>

        Select your outbound (station we are picking up from) and your inbound (station we are shipping to) from the
        available stations. Copy and paste the items you want delivered into the "Package Details" text area below.
        Click "Run Quote" to get a delivery quote. From there, you can look at the mocked contract creation screens to
        streamline the in-game process.
      </p>
      <br>
      <p> If you have any questions - please reach out to <a href="https://evewho.com/character/91876195"
          target="_blank">Nate Armstrong</a> <a href="https://evewho.com/character/93193836" target="_blank">(or Scott
          Armstrong)</a> in game. </p>
      <br>
      <p>
        <i><b>NOTE: </b></i> To best serve you - please follow these rules. Failure to follow these rules will result in
        the team unable to run your
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
      <p>
        <i><b>NOTE^2: </b></i> Shipping From JITA
      <ol class="bullets">
        <li>Please limit your packages to a maximum of 60,000 m³ to ensure compatibility with our distribution system
          (DST). Failure to comply may result in contract delays. If breaking up the contract, price each package
          according to the website. Consider relocating items to Otitoh IV - Moon 1 - Lai Dai Corp. Factory to avoid
          this temporary policy during our service ramp-up. Apologies for any inconvenience.</li>
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
  font-size: 1.5rem;
}

.bullets {
  padding-left: 2em;
  list-style-type: circle;
}

.content {
  font-size: 1.2em;
}
</style>
