<template>
  <ul role="menu">
    <li
      v-for="item in items"
      :key="item.id"
      :class="{'--active' : item === activeItem }">
      <a href="#">
        <Icon
          :icon-name="item"
          width="16"
          height="16">
          <OperationIcon v-if="item === 'Операции'" />
          <ReportsIcon v-else-if="item === 'Отчеты'" />
          <KontragentsIcon v-else-if="item === 'Контрагенты'" />
          <ProjectsIcon v-else-if="item === 'Проекты'" />
          <StatsIcon v-else-if="item === 'Статьи расходов'" />
          <EmployeesIcon v-else-if="item === 'Сотрудники'" />
        </Icon>
        {{ item }}
      </a>
    </li>
  </ul>
</template>

<script>
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
    items: Array,
  },

  data: () => ({
    activeItem: 'Операции',
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
