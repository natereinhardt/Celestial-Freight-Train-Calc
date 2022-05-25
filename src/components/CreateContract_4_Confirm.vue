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
    <div class="container">
        <CreateContractHeader title='Create
            Contract' :titleImage="contractImg" subHeader='Confirm (4/4)'
            :subHeaderImage='courierContractImg' />
    </div>
</template>

<style scoped>
.container {
    border-style: dashed;
    border-top: 25em;
    border-color: var(--ccp-modal-top-border-color);
    margin: .5em;
}
</style>
