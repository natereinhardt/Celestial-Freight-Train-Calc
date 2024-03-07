<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  titleImage: {
    type: String,
    require: true
  },
  subHeader: {
    type: String,
    require: true
  },
  subHeaderImage: {
    type: String,
    require: true
  }
})
</script>

<template>
  <div>
    <div class="title">
      <img alt="Contract logo" class="logo" :src="titleImage" width="35" height="35" />
      <h2 class="">{{ title }}</h2>
    </div>
    <div class="subHeader">
      <img
        alt="Contract Courier logo"
        class="logo subHeader-img"
        :src="subHeaderImage"
        width="50"
        height="50"
      />
      <h3>{{ subHeader }}</h3>
    </div>
  </div>
</template>

<style scoped>
.subHeader-img {
  filter: opacity(0.9) drop-shadow(0 0 0 rgb(0, 174, 255));
}
.container {
  width: 100%;
}

.title {
  display: flex;
}

.subHeader {
  display: flex;
}

h3 {
  font-size: 1.2rem;
}
</style>
