<script setup>

import question from '@/assets/question.png'

import Popper from "vue3-popper";
defineProps({
    label: {
        type: String,
        required: true,
    },
    value: {
        required: true,
    },
    subLabel: {
        required: false,
        type: String,
    },
    tooltip: {
        required: false,
        type: String
    }
});
const hover = true
</script>

<template>
    <div class="quote-line-item">
        <div class="label">{{ label }}
            <Popper v-if="tooltip" :content="tooltip" :hover="hover">
                <img alt="tooltip logo" class="logo" :src='question' width="15" height="15" />
            </Popper>
        </div>
        <div class="value">{{ value.toLocaleString() }} {{ subLabel }}</div>
    </div>
</template>

<style scoped>
.quote-line-item {
    display: flex;
    justify-content: space-between;
    padding: .2em
}

.label {
    order: 1;
    float: left;
    flex-shrink: 5;
}

.value {
    flex-shrink: 5;
    align-self: flex-end;
    order: 2;
}
</style>
