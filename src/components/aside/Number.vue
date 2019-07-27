<template>
  <span class="number"
    ><span class="number__whole">{{ whole }}</span
    ><span class="number__afterzero">{{ afterzero }}</span
    ><span class="number__currency"> {{ currency }}</span></span>
</template>

<script>
export default {
  name: 'Number',

  props: {
    value: Number,
    currency: String,
  },

  computed: {
    whole() {
      return Math.floor(this.value).toLocaleString('ru');
    },

    afterzero() {
      const string = String(this.value).split('.');
      return `,${string[1]}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/_stylebase.scss';

.number {
  color: $color_text;

  &__afterzero,
  &__currency {
    color: $color_text_light;
  }
}
</style>
