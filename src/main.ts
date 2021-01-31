import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { rootStore } from './store'

import '@/assets/styles/index.scss';

import mockAPI from '@/assets/mirage';
mockAPI();


createApp(App)
  .use(rootStore)
  .use(router)
  .mount('#app')
