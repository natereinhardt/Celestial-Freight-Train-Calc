<script async setup>
import TitleBar from '@/components/TitleBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import { RouterView } from 'vue-router';
</script>
<template>
  <Suspense>
    <template #default>
      <div class="page-wrapper">
        <div class="top-nav">
          <TitleBar />
        </div>
        <div class=content-wrapper>
          <RouterView />
        </div>
        <div class="footer">
          <FooterBar />
        </div>
      </div>
    </template>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense>
</template>


<style scoped>
@import '@/assets/base.css';

@font-face {
  font-family: "Shentox";
  src: url('@/assets/fonts/Shentox-light.ttf') format('truetype');
}

#app {
  font-family: "Shentox";
  font-size: 20px;
  color: white;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.content-wrapper {
  margin: auto;
}

.top-nav {
  width: 100%;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.page-wrapper {
  margin: auto;
  display: flex;
  flex-flow: column;
}

@media (hover: hover) {
  a:hover {
    background-color: var(--ccp-hover-color);
  }
}


@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

}
</style>
