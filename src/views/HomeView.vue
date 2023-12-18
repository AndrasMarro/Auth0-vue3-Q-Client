<script setup>
const props = defineProps({
  currentUser: {
    type: Object,
  },
});

// import { storeToRefs } from 'pinia';
// import { useMyStore } from '../stores/myStore';

// const myStore = useMyStore();
// const { message } = storeToRefs(myStore);
</script>

<template>
  <div class="column items-center q-mt-md">
    <div><span class="text-h4">Home</span></div>
    <!-- <div class="text-h6 text-italic text-weight-light">{{ message }}</div> -->

    <h6>Login data:</h6>
    <div class="text-italic text-weight-light" style="width: 500px">
      <code>{{ props.currentUser }}</code>
    </div>
  </div>
</template>
