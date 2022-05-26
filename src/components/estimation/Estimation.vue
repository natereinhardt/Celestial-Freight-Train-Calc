<script setup>
import Multiselect from '@vueform/multiselect'
import { ref } from 'vue'
const outbound = ref(null)
const inbound = ref(null)
const options = ref([
    'Jita IV - Moon 4 - Caldari Navy Assembly Plant',
    'W4E-IT - The Troll Empire',
    'Y19P-1 - TIRE Sector Command Delta',
])
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
            <Multiselect class="bg-gray-800 bg-opacity-10" v-model="outbound" :options="options" />
        </div>
        <div>
            Inbound (Station To):
            <Multiselect class="bg-gray-800 bg-opacity-10" v-model="inbound" :options="options" />
        </div>
        <div>
            <span>Package Details:</span>
            <p style="white-space: pre-line;">{{ message }}</p>
            <textarea v-model="message" placeholder="Tritanium 1000 ..."></textarea>
        </div>
    </div>

</template>
<style src="@vueform/multiselect/themes/default.css">
</style>
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
