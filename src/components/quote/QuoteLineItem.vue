<script setup>
import question from '@/assets/question.png';

import Popper from 'vue3-popper';
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
    type: String,
  },
  url: {
    requied: false,
    type: String,
  },
});
const hover = true;
</script>

<template>
  <div class="quote-line-item">
    <div class="label">
      {{ label }}
      <Popper :class="tooltip" v-if="tooltip" :content="tooltip" hover arrow>
        <img
          alt="tooltip logo"
          class="logo"
          :src="question"
          width="15"
          height="15"
        />
      </Popper>
    </div>
    <div v-if="url" class="value">
      <a :href="`${url}/${value}`" target="_blank"
        >{{ value.toLocaleString() }} {{ subLabel }}</a
      >
    </div>
    <div v-else class="value">{{ value.toLocaleString() }} {{ subLabel }}</div>
  </div>
</template>

<style scoped>
:deep(.popper) {
  background: var(--color-background);
  font-size: 0.75em;
  padding: 1em;
  white-space: nowrap;
  border-radius: 20px;
  color: #fff;
  border-width: 1em;
  border-color: var(--ccp-modal-top-border-color);
  font-weight: bold;
}

:deep(.popper #arrow::before) {
  background: var(--color-background);
}

:deep(.popper:hover),
:deep(.popper:hover > #arrow::before) {
  background: var(--color-background);
  border-color: var(--ccp-modal-top-border-color);
}

.quote-line-item {
  display: flex;
  justify-content: space-between;
  padding: 0.2em;
}

.label {
  max-width: 100%;
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
