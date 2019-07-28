<template>
  <li
    class="operation"
    :class="{ '--plus': isPlus, '--active': isActive }"
    @click="click"
  >
    <div class="operation__icon">
      <Icon
        width="8"
        height="12">
        <ArrowIcon />
      </Icon>
    </div>
    <div class="operation__field field1">
      <div class="operation__dialog">
        <Dropdown
          :trigger.sync="operation.title1"
          :items="['Foo', 'Bar', 'Bass']"
          :arrow="isActive" />
      </div>
      <div class="operation__dialog">
        <span class="operation__label">Со счета: </span><Dropdown
          class="dropdown--small"
          :trigger.sync="operation.title2"
          :items="['Foo', 'Bar', 'Bass']"
          :arrow="isActive" />
      </div>
    </div>
    <div class="operation__field field2">
      <div class="operation__dialog">
        <Dropdown
          :trigger.sync="operation.title3"
          :items="['Foo', 'Bar', 'Bass']"
          :arrow="isActive" />
      </div>
      <h6><span class="operation__label">{{ operation.title4 }}</span></h6>
    </div>
    <div class="operation__field field3">
      <input
        v-if="isActive"
        type="text"
        class="operation__input"
        :value="operation.title5"
        @input="input" />
      <h5 v-else class="operation__for-input">{{ operation.title5 }}</h5>
    </div>
    <div class="operation__field field4">
      <span class="operation__status">{{ operation.status }}</span>
    </div>
    <div class="operation__field field5">
      <h4>
        <span v-if="isPlus">+</span
        ><Number
          :value="operation.price"
          currency="₽" />
      </h4>
    </div>
  </li>
</template>

<script>
import Icon from '../../icons/Icon';
import ArrowIcon from '../../icons/feed/ArrowIcon';
import Arrow02Icon from '../../icons/feed/Arrow02Icon';
import Number from '../../utils/Number';
import Dropdown from '../../utils/Dropdown';

export default {
  name: 'Operation',

  components: {
    Icon,
    ArrowIcon,
    Arrow02Icon,
    Number,
    Dropdown,
  },

  props: {
    operation: {
      type: Object,
      default: () => ({}),
    },
  },

  data: () => ({
    isActive: false,
  }),

  computed: {
    isPlus: function() { // eslint-disable-line
      return this.operation.price > 0;
    },
  },

  updated() {
    const wrapper = document.querySelectorAll('.operation__field.--for-input')[0];
    if (wrapper) {
      const input = wrapper.children[0];
      if (input) {
        input.focus();
        wrapper.classList.remove('--for-input');
      }
    }
  },

  methods: {
    click(event) {
      const target = event.target;
      if (!this.isActive) {
        if (target.classList.contains('operation__for-input')) {
          target.closest('.operation__field').classList.add('--for-input');
        }
        this.isActive = true;
      } else {
        if (target.classList.contains('dropdown__trigger')) { // eslint-disable-line no-lonely-if
        } else if (target.classList.contains('operation__for-input') || target.classList.contains('operation__input')) {
          target.focus();
        } else {
          this.isActive = false;
        }
      }
    },

    input(event) {
      event.target.addEventListener('keydown', (evt) => {
        if (evt.code === 'Enter') {
          this.operation.title5 = event.target.value;
          event.target.blur();
        }
      });

      /* if (event.target.value === '') {
        event.target.placeholder = "(пусто)"
      } */
      event.target.addEventListener('blur', () => {
        this.operation.title5 = event.target.value;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/_stylebase.scss';

.operation {
  cursor: pointer;
  height: 69px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 3vw;
  justify-content: flex-start;
  border-radius: $border-radius_msmall 0 0 $border-radius_msmall;

  &__field {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    //margin-left: 1.5vw;

    &.field1 {
      padding-left: 18px;
      @include steel-flex(19vw);
    }

    &.field2 {
      @include steel-flex(13.4vw);
    }

    &.field3 {
      @include steel-flex(17.5vw);
    }

    &.field4 {
      justify-content: flex-end;
      align-items: flex-end;
      @include steel-flex(8.5vw);
    }

    &.field5 {
      text-align: right;
      padding-right: 15px;
    }

    h4 {
      margin: 0;
      @include text($font-family_sans, round($font-size_normal * 0.8), $font-weight_sans_regular);
      line-height: 23px;
      letter-spacing: -0.01em;
    }

    h5 {
      display: inline-block;
      align-self: flex-start;
      margin: 0;
      @include text($font-family_sans, $font-size_small, $font-weight_sans_regular);
      letter-spacing: -0.01em;
    }

    h6 {
      display: inline-block;
      margin: 0;
      @include text($font-family_sans, $font-size_xsmall, $font-weight_sans_regular);
      letter-spacing: -0.01em;
    }

    .number {
      color: $color_warning;
    }
  }

  &__dialog {
    white-space: nowrap;
  }

  &__label {
    color: $color_text_light;
    @include text($font-family_sans, $font-size_xsmall, $font-weight_sans_regular);
    letter-spacing: -0.01em;
  }

  &__input {
    margin: 0;
    border-bottom: 1px solid rgba(46, 46, 46, 0.1);
    @include size(100%, 19px);
    @include text($font-family_sans, $font-size_small, $font-weight_sans_regular);
    letter-spacing: -0.01em;
  }

  &__status {
    display: inline-block;
    padding: 5px 8px;
    text-align: center;
    border-radius: $border-radius_msmall;
    color: $color_text_light;
    background: $color_background_darken;
    @include text($font-family_sans, $font-size_small, $font-weight_sans_regular);
    letter-spacing: -0.01em;
  }

  &__icon {
    background: $color_warning;
    border-radius: $border-radius_xsmall;
    text-align: center;
    line-height: 30px;
    @include steel-flex(30px);
    @include size(30px, 30px);

    .icon {
      color: $color_danger;
    }
  }

  &.--plus {
    .operation__icon {
      background: $color_success;

      .icon {
        color: $color_white;
        transform: rotate(-180deg);
      }
    }

    .operation__field {
      h4,
      .number {
        color: $color_success;
      }
    }
  }

  &.--active {
    background: $color_background_light-02;
    box-shadow: 0 25px 20px -5px fade-out($color_shadow, 0.06);
  }
}
</style>
