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
    <div class="row justify-center">
      <span class="col-3"> {{ props.currentUser }} </span>
    </div>
  </div>
</template>
