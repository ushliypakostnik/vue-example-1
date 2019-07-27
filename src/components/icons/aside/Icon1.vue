<template>
  <path
    opacity="0.2"
    d="M1 0.5V15.5M13.5 34.5H1V15.5M1 15.5H13.5"
    stroke="currentColor"/>
</template>

<script>
export default {
  name: 'Icon1',

  props: {
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
};
</script>
