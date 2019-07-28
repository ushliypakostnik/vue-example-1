<template>
  <div class="wrapper">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Legacy',

  props: {
    text: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/_stylebase.scss';

.wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  h1 {
    text-align: center;
    color: $color_text;
    margin-top: -5%;
    padding-left: 10px;
    padding-right: 10px;
  }
}

</style>
