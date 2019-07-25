<template>
  <div class="app__wrapper">
    <form class="app__form">
      <img src="../assets/logo.png" width="70px">
      <h1 class="app__header">Vue cli based frontend boilerplate</h1>
      <input
        id="input"
        v-model="input"
        type="text"
        name="input"
      >
      <h3>V-MODEL test:</h3>
      <p>{{ input }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Test',

  data() {
    return {
      input: null,
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
</style>
