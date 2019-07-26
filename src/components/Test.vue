<template>
  <div>
    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
      <template v-slot:activator="{ on }">
        <v-btn
          v-model="date"
          v-on="on"
        >
          <Icon icon-name="write"><DatapickerIcon /></Icon> Июль
        </v-btn>
      </template>
      <v-date-picker no-title
        v-model="date" />
    </v-menu>
  </div>
</template>

<script>
import Icon from './icons/Icon';
import DatapickerIcon from './icons/DatapickerIcon';

export default {
  name: 'Test',

  components: {
    Icon,
    DatapickerIcon,
  },

  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
</style>
