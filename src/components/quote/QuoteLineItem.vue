<script setup>
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

</script>

<template>
    <div class="quote-line-item">
        <div class="label">{{ label }}</div>
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
