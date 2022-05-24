<script setup>
import Reasoning from '@/components/Reasoning.vue';
import Estimation from '@/components/Estimation.vue';
import ContractCreation from '@/components/ContractCreation.vue';
</script>

<template>
  <main class="wrapper">
    <Estimation class="estimation" />
    <Reasoning class="reasoning" />
    <ContractCreation class="contract-creation" />
  </main>
</template>
<style>
@import '@/assets/base.css';

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}


.estimation {
  order: 1
}

.reasoning {
  order: 2
}

.contract-creation {
  order: 3
}
</style>
