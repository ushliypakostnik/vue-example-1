<!-- eslint-disable max-len -->

<!-- Datapicker -->
<template>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 6C3.44772 6 3 5.51785 3 4.92308L3 4C2.44772 4 2 4.44772 2 5V11C2 11.5523 2.44772 12 3 12H11C11.5523 12 12 11.5523 12 11V5C12 4.44772 11.5523 4 11 4V4.92308C11 5.51785 10.5523 6 10 6C9.44771 6 9 5.51785 9 4.92308V4H5V4.92308C5 5.51785 4.55228 6 4 6ZM9 2H5V1.07692C5 0.482155 4.55228 0 4 0C3.44772 0 3 0.482155 3 1.07692L3 2C1.34315 2 0 3.34315 0 5V11C0 12.6569 1.34315 14 3 14H11C12.6569 14 14 12.6569 14 11V5C14 3.34315 12.6569 2 11 2V1.07692C11 0.482155 10.5523 0 10 0C9.44771 0 9 0.482155 9 1.07692V2Z"
    fill="iconColor"/>
</template>

<script>
export default {
  name: 'DatapickerIcon',

  props: {
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
};
</script>
