<template>
  <v-app id="app">
    <Layout />
  </v-app>
</template>

<script>
import DATA from '../config';

import Layout from './Layout';

export default {
  name: 'App',

  beforeCreate() {
    this.$router.push(`/${DATA.pages[0].item}`);
  },

  components: {
    Layout,
  },
};
</script>
