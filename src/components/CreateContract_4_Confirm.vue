<script setup>
// defineProps({
//     msg: {
//         type: String,
//         required: true,
//     },
// });
import contractImg from '@/assets/contracts.png'
import courierContractImg from '@/assets/contractcourier.png'
import CreateContractHeader from '@/components/CreateContractHeader.vue';
</script>

<template>
    <div class="container inner-container">
        <CreateContractHeader title='Create
            Contract' :titleImage="contractImg" subHeader='Confirm (4/4)' :subHeaderImage='courierContractImg' />
    </div>
</template>

<style scoped>
.inner-container {
    margin-top: .5em;
}
</style>
