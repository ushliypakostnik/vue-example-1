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
      <AsideMenu :pages="pages" />
      <div class="aside__bottom">
        <v-avatar size="40px" class="aside__avatar">
          <img
            :src="user.ava"
            alt="Avatar"
          >
        </v-avatar>
        <div class="aside__username">{{ user.name }}</div>
        <div class="aside__company">{{ user.company }}</div>
        <a href="#" class="aside__control1">
          <Icon
            width="16"
            height="16">
            <Icon2 />
          </Icon>
        </a>
        <a href="#" class="aside__control2">
          <Icon
            width="16"
            height="16">
            <InfoIcon />
          </Icon>
        </a>
      </div>
    </div>
  </aside>
</template>

<script>
import DATA from '../../config';

import Number from '../utils/Number';
import AsideMenu from './AsideMenu';
import Icon from '../icons/Icon';
import Icon1 from '../icons/aside/Icon1';
import LogoIcon from '../icons/aside/LogoIcon';
import Icon2 from '../icons/aside/Icon2';
import InfoIcon from '../icons/aside/InfoIcon';

export default {
  name: 'Aside',

  components: {
    Number,
    Icon,
    Icon1,
    LogoIcon,
    AsideMenu,
    Icon2,
    InfoIcon,
  },

  data: () => ({
    values: DATA.user.data.values,
    pages: DATA.pages,
    user: DATA.user,
  }),
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
    top: 21px;
    right: 19px;
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
    @include size(240px, 176px);
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
    margin-bottom: 5px;
    @include text($font-family_sans, $font-size_xsmall, $font-weight_sans_regular);
    letter-spacing: -0.01em;

    .number {
      float: right;
    }
  }

  &__label {
    color: $color_text_light;
    letter-spacing: -0.01em;
  }

  &__bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 18px;
    padding-left: 80px;
    padding-right: 60px;
    background: $color_background_dark;
    border-top-left-radius: $border-radius_large;
    border-bottom-left-radius: $border-radius_large;
    @include size(100%, 86px);
  }

  &__avatar {
    position: absolute;
    top: 19px;
    left: 25px;
  }

  &__username {
    margin-bottom: 2px;
    white-space: nowrap;
    @include text($font-family_sans, round($font-size_small * 1.1), $font-weight_sans_semibold);
    line-height: 19px;
    letter-spacing: -0.01em;
  }

  &__company {
    white-space: nowrap;
    opacity: 0.5;
    @include text($font-family_sans, round($font-size_small * 1.1), $font-weight_sans_regular);
    line-height: 19px;
    letter-spacing: -0.01em;
  }

  &__control1,
  &__control2 {
    position: absolute;
    display: block;
    text-align: center;
    line-height: 20px;
    @include size(16px, 16px);

    svg {
      display: inline-block;
      vertical-align: middle;
    }
  }

  &__control1 {
    top: 15px;
    right: 30px;
  }

  &__control2 {
    top: 47px;
    right: 31px;

    // fix icon
    border: 2px solid #2e2e2e;
    border-radius: 50%;

    svg {
      position: relative;
      top: -5px;
      left: -2px;
    }
  }
}
</style>
