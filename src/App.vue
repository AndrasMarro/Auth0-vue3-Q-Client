<script setup>
import { ref } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);

const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
const login = () => loginWithRedirect();
const logoutm = () => logout({ logoutParams: { returnTo: window.location.origin } });
const currentUser = user;
const loggedIn = isAuthenticated;
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
        <q-avatar v-if="loggedIn"> <img :src="currentUser.picture" /></q-avatar>
      </q-toolbar>

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
