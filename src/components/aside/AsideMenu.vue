<template>
  <ul role="menu">
    <li
      v-for="page in pages"
      :key="page.id"
      :class="{'--active' : page.item === activePage }">
      <router-link
        :to="`/${page.item}`"
        @click.prevent.native="click(page)">
        <Icon
          :icon-name="page.name"
          width="16"
          height="16">
          <OperationIcon v-if="page.item === items[0]" />
          <ReportsIcon v-else-if="page.item === items[1]" />
          <KontragentsIcon v-else-if="page.item === items[2]" />
          <ProjectsIcon v-else-if="page.item === items[3]" />
          <StatsIcon v-else-if="page.item === items[4]" />
          <EmployeesIcon v-else-if="page.item === items[5]" />
        </Icon>
        {{ page.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import DATA from '../../config';

import Icon from '../icons/Icon';
import OperationIcon from '../icons/aside/OperationIcon';
import ReportsIcon from '../icons/aside/ReportsIcon';
import KontragentsIcon from '../icons/aside/KontragentsIcon';
import ProjectsIcon from '../icons/aside/ProjectsIcon';
import StatsIcon from '../icons/aside/StatsIcon';
import EmployeesIcon from '../icons/aside/EmployeesIcon';

export default {
  name: 'AsideMenu',

  props: {
    pages: Array,
  },

  data: () => ({
    activePage: DATA.pages[0].item,
  }),

  components: {
    Icon,
    OperationIcon,
    ReportsIcon,
    KontragentsIcon,
    ProjectsIcon,
    StatsIcon,
    EmployeesIcon,
  },

  computed: {
    items() {
      const items = [];
      // eslint-disable-next-line arrow-body-style
      this.pages.map((item) => {
        return items.push(item.item);
      });
      return items;
    },
  },

  methods: {
    click(page) {
      this.activePage = page.item;
      /* if (this.activePage === 1) {
        this.$router.push('operations');
      } else {
        this.$router.push('others');
      } */
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/_stylebase.scss';

ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 25px;

  > li {
    padding: 9px 23px 9px 13px;
    margin-bottom: 12px;
    border-radius: $border-radius_small;

    &.--active {
      background: $color_background_darken;

      a { pointer-events: none; }
    }

    a {
      position: relative;
      display: inline-block;
      padding-left: 25px;
      white-space: nowrap;
      @include text($font-family_sans, round($font-size_normal * 0.95), $font-weight_sans_semibold);

      .icon {
        position: absolute;
        top: 6px;
        left: 0;
      }
    }

    &:nth-of-type(5) {
      a .icon {
        top: 8px;
      }
    }
  }
}
</style>
