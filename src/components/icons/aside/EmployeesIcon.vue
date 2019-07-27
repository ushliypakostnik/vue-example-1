<template>
  <g>
    <circle
      cx="7"
      cy="5"
      r="4"
      stroke="iconColor"
      stroke-width="2" />
    <path
      d="M13 16C13 12.6863 10.3137 10 7 10C3.68629 10 1 12.6863 1 16"
      stroke="iconColor"
      stroke-width="2"/>
  </g>
</template>

<script>
export default {
  name: 'EmployeesIcon',

  props: {
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
};
</script>
