import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import mitt from 'mitt';
import { createPinia } from 'pinia';
import Toast from 'vue-toastification';
import { options } from '@/constants/toast-options';
import i18n from '@/i18n';
import BodyScrollLock from '@/directives/body-scroll-lock';
import { polyfillClipboard } from '@/directives/polyfill-clipboard';
import '@/assets/css/styles.scss';

const app = createApp(App);
export const emitter = mitt();

app.use(createPinia())
    .use(router)
    .use(Toast, options)
    .use(i18n)
    .provide('emitter', emitter)
    .directive(BodyScrollLock.name, BodyScrollLock.directive);

app.mount('#app');
polyfillClipboard();
