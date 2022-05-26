<script setup>
import Quote from '@/components/quote/Quote.vue';
import Estimation from '@/components/estimation/Estimation.vue';
import ContractCreation from '@/components/createContract/ContractCreation.vue';
import Welcome from '@/components/Welcome.vue'
</script>

<template>
  <main class="wrapper">
    <div class="welcome-wrapper">
      <Welcome />
    </div>
    <div class="content-wrapper">
      <Estimation class="estimation" />
      <Quote class="quote" />
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

.quote {
  order: 2
}

.contract-creation {
  order: 3
}
</style>
