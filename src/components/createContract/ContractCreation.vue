<script setup>
import CreateContract_1 from '@/components/createContract/CreateContract_1.vue';
import CreateContract_2 from '@/components/createContract/CreateContract_2.vue';
import CreateContract_3 from '@/components/createContract/CreateContract_3.vue';
import CreateContract_4_Confirm from '@/components/createContract/CreateContract_4_Confirm.vue';
</script>

<template>
  <h2>Mock Contract Creation</h2>
  <main class="contracts-container">
    <CreateContract_1 class="create-contract-1 bg-gray-800 bg-opacity-10" />
    <CreateContract_2 class="create-contract-2 bg-gray-800 bg-opacity-10" />
    <CreateContract_3 class="create-contract-3 bg-gray-800 bg-opacity-10" />
    <CreateContract_4_Confirm
      class="create-contract-4-confirm bg-gray-800 bg-opacity-10"
    />
  </main>
</template>
<style scoped>
@import '@/assets/base.css';

h2 {
  font-size: 1.5rem;
  text-align: center;
  padding-top: 1em;
}

.contracts-container {
  width: auto;
  margin: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.create-contract-1 {
  order: 1;
}

.create-contract-2 {
  order: 2;
}

.create-contract-3 {
  order: 3;
}

.create-contract-4-confirm {
  order: 4;
}
</style>
