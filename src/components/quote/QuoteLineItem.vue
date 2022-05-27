<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    }
});

</script>

<template>
    <div class="quote-line-item">
        <div class="label">{{ label }}</div>
        <div class="value">{{ value }}</div>
    </div>
</template>

<style scoped>
.quote-line-item {
    display: flex;
}

.label {
    order: 1;
}

.value {
    order: 2;
}
</style>
