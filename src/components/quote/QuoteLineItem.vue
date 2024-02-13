<script setup>
import question from '@/assets/question.png'

import Popper from 'vue3-popper'

defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    required: true
  },
  subLabel: {
    required: false,
    type: String
  },
  tooltip: {
    required: false,
    type: String
  },
  url: {
    requied: false,
    type: String
  },
  compare1: {
    required: false,
    type: Number
  },
  compare2: {
    required: false,
    type: Number
  }
})
</script>

<template>
  <div class="quote-line-item">
    <div class="label">
      {{ label }}:
      <Popper :class="tooltip" v-if="tooltip" :content="tooltip" hover arrow>
        <img alt="tooltip logo" class="logo" :src="question" width="15" height="15" />
      </Popper>
    </div>
    <div v-if="url" class="value">
      <a :href="`${url}/${value}`" target="_blank">{{ value.toLocaleString() }} {{ subLabel }}</a>
    </div>
    <div v-else-if="compare1 > compare2" class="value-warn">
      {{ value.toLocaleString() }} {{ subLabel }}
      <Popper
        :class="tooltip"
        :content="`${label} of ${value.toLocaleString()} exceeds the Max ${label} of ${compare2.toLocaleString()}. Please split up your items into multiple packages`"
        hover
        arrow
      >
        <img alt="tooltip logo" class="logo" :src="question" width="15" height="15" />
      </Popper>
    </div>
    <div v-else class="value">{{ value.toLocaleString() }} {{ subLabel }}</div>
  </div>
</template>

<style scoped>
:deep(.popper) {
  font-size: 0.75em;
  white-space: nowrap;
  font-weight: bold;
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

.value-warn {
  max-width: 100%;
  order: 1;
  float: left;
  flex-shrink: 5;
  color: red;
}

.value {
  flex-shrink: 5;
  align-self: flex-end;
  order: 2;
}
</style>
