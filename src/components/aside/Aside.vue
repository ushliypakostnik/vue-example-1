<template>
  <aside class="aside">
    <div class="aside__body">
      <div class="aside__logo">
        <Icon
          icon-name="logo"
          width="30"
          height="18">
          <LogoIcon />
        </Icon>
        <div>Лиана</div>
      </div>
      <h3>Все деньги</h3>
      <div class="aside__head">
        <div class="aside__part">
          <div class="aside__main-value">
            <Number
              :value="values[0]"
              currency="₽" />
          </div>
          <div class="aside__values">
            <Icon
              icon-name="icon1"
              width="14"
              height="35"
              fill="none">
              <Icon1 />
            </Icon>
            <div><Number
              :value="values[1]"
              currency="₽" />
            </div>
            <div>
              <Number :value="values[2]" currency="$" />
              <span
                class="text"
              > (</span
              ><Number
                :value="values[3]"
                currency="₽"
              /><span class="text">)</span>
            </div>
          </div>
        </div>
        <hr />
        <div class="aside__part">
          <div class="aside__string">
            <span class="aside__label">Тинькофф банк</span>
            <Number
              :value="values[4]"
              currency="₽" />
          </div>
          <div class="aside__string">
            <span class="aside__label">Тинькофф банк, $</span>
            <Number
              :value="values[5]"
              currency="₽" />
          </div>
          <div class="aside__string">
            <span class="aside__label">Касса</span>
            <Number
              :value="values[6]"
              currency="₽" />
          </div>
        </div>
      </div>
      <AsideMenu :items="menuitems" />
    </div>
  </aside>
</template>

<script>
import Number from './Number';
import AsideMenu from './AsideMenu';
import Icon from '../icons/Icon';
import Icon1 from '../icons/aside/Icon1';
import LogoIcon from '../icons/aside/LogoIcon';

export default {
  name: 'Aside',

  components: {
    Number,
    Icon,
    Icon1,
    LogoIcon,
    AsideMenu,
  },

  data: () => ({
    values: [1930545.26, 1345511.26, 8797.41, 569156.26, 541356.47, 8797.41, 671099.11],
    menuitems: ['Операции', 'Отчеты', 'Контрагенты', 'Проекты', 'Статьи расходов', 'Сотрудники'],
  }),

  methods: {

  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/_stylebase.scss';

.aside {
  padding-top: 26px;
  padding-bottom: 26px;
  padding-right: 35px;

  &__body {
    position: relative;
    width: 100%;
    min-height: 748px;
    padding-top: 25px;
    padding-left: 36px;
    padding-right: 36px;
    background: $color-background;
    border-top-left-radius: $border-radius_large;
    border-bottom-left-radius: $border-radius_large;
  }

  &__logo {
    text-align: center;
    position: absolute;
    top: 22px;
    right: 13px;
    @include text($font-family_sans, 10px, $font-weight_sans_bold);
    line-height: 7px;

    > div {
      color: $color_text_light;
    }
  }

  &__head {
    margin-top: 14px;
    background: $color_background_dark;
    border-radius: $border-radius_normal;
  }

  &__part {
    padding: 9px 18px 9px;
  }

  &__main-value {
    @include text($font-family_sans, $font-size_large, $font-weight_sans_semibold);
    letter-spacing: 0.01em;
  }

  &__values {
    position: relative;
    padding-left: 18px;
    padding-top: 5px;
    @include text($font-family_sans, $font-size_small, $font-weight_sans_regular);
    letter-spacing: 0.01em;

    svg {
      position: absolute;
      top: 0;
      left: 0;
    }

    > div {
      white-space: nowrap;
      line-height: 19px;

      .text {
        color: $color_text_light;
      }
    }
  }

  &__string {
    @include text($font-family_sans, $font-size_xsmall, $font-weight_sans_regular);
    letter-spacing: -0.01em;
    margin-bottom: 5px;

    .number {
      float: right;
    }
  }

  &__label {
    color: $color_text_light;
    letter-spacing: -0.01em;
  }
}
</style>
