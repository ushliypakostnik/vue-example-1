<!-- eslint-disable max-len -->
<template>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0 1C0 0.447715 0.482155 0 1.07692 0H12.9231C13.5178 0 14 0.447715 14 1C14 1.55228 13.5178 2 12.9231 2H1.07692C0.482155 2 0 1.55228 0 1ZM0 6C0 5.44772 0.482155 5 1.07692 5H12.9231C13.5178 5 14 5.44772 14 6C14 6.55228 13.5178 7 12.9231 7H1.07692C0.482155 7 0 6.55228 0 6ZM1.07692 10C0.482155 10 0 10.4477 0 11C0 11.5523 0.482155 12 1.07692 12H12.9231C13.5178 12 14 11.5523 14 11C14 10.4477 13.5178 10 12.9231 10H1.07692Z"
    fill="iconColor"/>
</template>

<script>
export default {
  name: 'StatsIcon',

  props: {
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
};
</script>
