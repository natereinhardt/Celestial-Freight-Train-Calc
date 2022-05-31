<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
    value: {
        required: true,
    }
});

</script>

<template>
    <div class="quote-line-item">
        <div class="label">{{ label }}</div>
        <div class="value">{{ value.toLocaleString() }}</div>
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
    order: 2;
}
</style>
