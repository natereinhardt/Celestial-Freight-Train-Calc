<script setup>
import contractImg from '@/assets/contracts.png'
import courierContractImg from '@/assets/contractcourier.png'
import CreateContractHeader from '@/components/CreateContractHeader.vue';
</script>

<template>
    <div class="container">
        <CreateContractHeader title='Create
            Contract' :titleImage="contractImg" subHeader='Pick Items (2/4)'
            :subHeaderImage='courierContractImg' />
    </div>
</template>

<style scoped>
.container {
    padding: .5em;
    margin: .5em;
}
</style>
