<template>
  <ul>
    <Operation
      v-for="operation in operations"
      :key="operation.id"
      :operation="operation"
    ></Operation>
  </ul>
</template>

<script>
import Operation from './Operation';

export default {
  name: 'OperationsList',

  components: {
    Operation,
  },

  props: {
    operations: {
      type: Array,
      default: () => ({}),
    },
  },

  data: () => ({
  }),
};
</script>

<style lang="scss" scoped>
@import '../../../styles/_stylebase.scss';

</style>
