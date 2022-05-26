<script setup>
import CreateContract_1 from '@/components/CreateContract_1.vue';
import CreateContract_2 from '@/components/CreateContract_2.vue';
import CreateContract_3 from '@/components/CreateContract_3.vue';
import CreateContract_4_Confirm from '@/components/CreateContract_4_Confirm.vue';

</script>

<template>
    <main class="container contracts-container">
        <CreateContract_1 class="create-contract-1  bg-gray-800 bg-opacity-10" />
        <CreateContract_2 class="create-contract-2  bg-gray-800 bg-opacity-10" />
        <CreateContract_3 class="create-contract-3  bg-gray-800 bg-opacity-10" />
        <CreateContract_4_Confirm class="create-contract-4-confirm  bg-gray-800 bg-opacity-10" />
    </main>
</template>
<style scoped>
@import '@/assets/base.css';

.contracts-container {
    width: 25em;
    margin: .5em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.create-contract-1 {
    order: 1
}

.create-contract-2 {
    order: 2
}

.create-contract-3 {
    order: 3
}

.create-contract-4-confirm {
    order: 4
}
</style>
