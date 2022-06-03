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
    }
});
const hover = true
</script>

<template>
    <div class="quote-line-item">
        <div class="label">{{ label }}</div>
        <div class="tooltip">
            <Popper content="Hello World" :hover="hover">
            <img alt="tooltip logo" class="logo" :src='question' width="20" height="20" />
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
}

.value {
    flex-shrink: 5;
    align-self: flex-end;
    order: 2;
}
</style>
