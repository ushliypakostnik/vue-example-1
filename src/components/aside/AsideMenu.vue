<template>
  <ul role="menu">
    <li
      v-for="item in items"
      v-bind:key="item.id">
      <a href="#">
        <Icon
          icon-name="logo"
          width="26"
          height="26">
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
  padding-top: 25px;

  > li {
    padding: 9px 23px 9px 13px;
    margin-bottom: 12px;

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
  }
}
</style>
