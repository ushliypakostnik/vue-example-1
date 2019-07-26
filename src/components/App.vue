<template>
  <v-app id="app" class="app">
    <Test />
  </v-app>
</template>

<script>
import Test from './Test';

export default {
  name: 'App',

  components: {
    Test,
  },
};
</script>

<style src="../styles/_stylebase.scss" lang="scss"></style>
