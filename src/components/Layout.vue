<template>
  <div>
    <div class="page">
      <main class="page__content" role="main">
        <router-view />
      </main>
      <Aside class="page__aside" />
    </div>
    <Legacy class="legacy" text="Gadget amd mobile views under construction" />
  </div>
</template>

<script>
import Aside from './aside/Aside';
import Legacy from './utils/Legacy';

export default {
  name: 'App',

  components: {
    Aside,
    Legacy,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_stylebase.scss';

$aside-width: 347px;

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

  @include not-xl {
    display: none !important; // rewrite component scoped
  }
}

.legacy {
  @include xl {
    display: none !important; // rewrite component scoped
  }
}
</style>

<style src="../styles/_stylebase.scss" lang="scss"></style>
