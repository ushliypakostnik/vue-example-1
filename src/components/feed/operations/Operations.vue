<template>
  <div class="operations">
    <OperationsList :operations="operations" />
  </div>
</template>

<script>
import DATA from '../../../config';

import OperationsList from './OperationsList';

export default {
  name: 'Operations',

  components: {
    OperationsList,
  },

  data: () => ({
    operations: DATA.user.data.operations,
  }),
};
</script>

<style lang="scss" scoped>
@import '../../../styles/_stylebase.scss';

</style>
