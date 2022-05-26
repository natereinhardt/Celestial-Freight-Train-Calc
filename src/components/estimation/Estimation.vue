<script setup>
// defineProps({
//     msg: {
//         type: String,
//         required: true,
//     },
// });
</script>

<template>
    <div class="container estimation-container  bg-gray-800 bg-opacity-10">
        <h3>
            Estimation
        </h3>
        <div>
            Select the outbound and inbound stations
        </div>
        <div>
            Outbound (Station From):
        </div>
        <div>
            Inbound (Station To):
        </div>
        <div>
            Package Details
        </div>
    </div>

</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.estimation-container {
    width: 40em;

}
</style>
