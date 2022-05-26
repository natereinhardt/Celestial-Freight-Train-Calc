<script setup>
import contractImg from '@/assets/contracts.png'
import courierContractImg from '@/assets/contractcourier.png'
import CreateContractHeader from '@/components/CreateContractHeader.vue';
</script>

<template>
    <div class="container inner-container">
        <CreateContractHeader title='Create
            Contract' :titleImage="contractImg" subHeader='Select Options (3/4)'
            :subHeaderImage='courierContractImg' />

    </div>
</template>

<style scoped>
.inner-container {
    margin-top: .5em;
}
</style>
