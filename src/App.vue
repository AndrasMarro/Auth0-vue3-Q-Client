<script setup>
import { ref } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);

const {
  loginWithRedirect,
  loginWithPopup,
  user,
  isAuthenticated,
  logout,
  getAccessTokenSilently,
  idTokenClaims,
} = useAuth0();

const login = () =>
  loginWithRedirect({
    // authorizationParams: {
    //   connection: 'google-oauth2',
    // },
  });
const logoutm = () => logout({ logoutParams: { returnTo: window.location.origin } });
const doSomethingWithToken = async () => {
  const token = await getAccessTokenSilently();
  const response = await fetch('https://api.example.com/posts', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  const data = await response.json();
};
const currentUser = user;
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Testing auth0 login
        </q-toolbar-title>
        <q-space></q-space>
        <div v-if="loggedIn">
          <q-avatar size="xl" class="q-mr-lg">
            <img :src="currentUser.picture" />
          </q-avatar>
          <q-btn-dropdown icon="person">
            <div class="row no-wrap q-pa-md">
              <q-separator vertical inset class="q-mx-lg" />
              <div class="column items-center">
                <q-avatar size="72px">
                  <img :src="currentUser.picture" />
                </q-avatar>
                <div class="q-mt-md text-center">
                  <span class="text-subtitle2">{{ currentUser.name }}</span>
                  <br />
                  <span class="text-title">{{ currentUser.email }}</span>
                </div>
                <q-btn
                  color="primary"
                  label="Logout"
                  size="sm"
                  class="q-mt-lg"
                  @click="logoutm"
                  v-close-popup
                />
              </div>
            </div>
          </q-btn-dropdown>
        </div>
        <q-btn v-if="!loggedIn" label="login" clickable v-ripple @click="login"></q-btn>
      </q-toolbar>
      {{ idTokenClaims }}
      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/about" label="About" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <q-item clickable v-ripple @click="login">
          <q-item-section avatar>
            <q-icon name="login" />
          </q-item-section>
          <q-item-section> Login </q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable v-ripple @click="logoutm">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section> Logout </q-item-section>
        </q-item>
      </q-list>
      <q-separator />
    </q-drawer>

    <q-page-container>
      <router-view :currentUser="currentUser" />
    </q-page-container>
  </q-layout>
</template>
