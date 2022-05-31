import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from './App.vue';
import router from './router';
import './index.css'

library.add(faCaretDown);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(createPinia());
app.use(router);

app.mount('#app');
