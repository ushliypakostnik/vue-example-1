<template>
  <div
  class="dropdown"
  :class="{'--open': isOpen}">
    <a
      class="dropdown__trigger"
      href="#"
      @click.prevent="toggle">
      {{ text }}
      <Arrow02Icon v-if="arrow" />
    </a>
    <ul class="dropdown__menu">
      <li
        v-for="item in items"
        :key="item.id">
        <a
          href="#"
          @click.prevent.stop="update">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Arrow02Icon from '../icons/feed/Arrow02Icon';

export default {
  name: 'Dropdown',

  components: {
    Arrow02Icon,
  },

  props: {
    trigger: String,
    items: Array,
    arrow: Boolean,
  },

  data: () => ({
    isOpen: false,
  }),

  created() {
    window.addEventListener('click', this.close);
  },

  beforeDestroy() {
    window.removeEventListener('click', this.close);
  },

  computed: {
    text: {
      get() {
        return this.trigger;
      },
      set(value) {
        this.$emit('update:trigger', value);
      },
    },
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },

    close(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    },

    update(event) {
      this.text = event.target.text;
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/_stylebase.scss';

.dropdown {
  position: relative;
  display: inline-block;

  &__trigger {
    .arrow-small {
      vertical-align: middle;
      margin-left: 2px;
    }
  }

  &__menu {
    z-index: $popup-layout;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 240px;
    background: $color_white;
    border: 1px solid $color_border;
    box-shadow: 0 15px 15px -5px fade-out($color_shadow, 0.06);

    > li {
      padding: 0;

      > a {
        display: block;
        padding: 8px 12px;
        color: $color_text;
        @include text($font-family_sans, $font-size_small, $font-weight_sans_regular);
        letter-spacing: -0.01em;
      }

      &:hover {
        background: $color_background_light;
      }
    }
  }

  &--small {
    .dropdown__trigger {
        @include text($font-family_sans, $font-size_xsmall, $font-weight_sans_regular);
        letter-spacing: -0.01em;
    }
  }

  &.--open {
    .dropdown__menu {
      display: block;
    }
  }
}
</style>
