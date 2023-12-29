import { createApp } from 'vue';
import { Quasar, Notify } from 'quasar';
import { createPinia } from 'pinia';
import { createAuth0 } from '@auth0/auth0-vue';

import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: { Notify },
});
app.use(
  createAuth0({
    domain: 'dev-43ovoodbznrzfsgb.eu.auth0.com',
    clientId: 'dFpt3sWkd1tmgLpqTp8FYr4w8zsHII5Y',
    authorizationParams: {
      redirect_uri: window.location.origin,
      audience: 'https://dev-43ovoodbznrzfsgb.eu.auth0.com/api/v2/',
    },
  }),
);

app.mount('#app');
