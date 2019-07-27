<template>
  <div class="page">
    <Feed class="page__content" />
    <Aside class="page__aside" />
  </div>
</template>

<script>
import Feed from './feed/Feed';
import Aside from './aside/Aside';

export default {
  name: 'Lauout',

  components: {
    Feed,
    Aside,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_stylebase.scss';

$aside-width: 337px;

.page {
  padding-right: $aside-width;

  &__content {

  }

  &__aside {
    top: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    @include size($aside-width, 100vh);
  }
}
</style>
