<script setup>
import Reasoning from '@/components/Reasoning.vue';
import Estimation from '@/components/Estimation.vue';
import ContractCreation from '@/components/ContractCreation.vue';
import Welcome from '@/components/Welcome.vue'
</script>

<template>
  <main class="wrapper">
    <div class="welcome-wrapper">
      <Welcome />
    </div>
    <div class="content-wrapper">
      <Estimation class="estimation" />
      <Reasoning class="reasoning" />
      <ContractCreation class="contract-creation" />
    </div>
  </main>
</template>
<style>
@import '@/assets/base.css';

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.welcome-wrapper {
  width: 100%;
}

.content-wrapper {
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
