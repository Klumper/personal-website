import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import '@/assets/styles/index.scss';

import mockAPI from '@/assets/mirage';
mockAPI();

createApp(App).use(store).use(router).mount('#app')
