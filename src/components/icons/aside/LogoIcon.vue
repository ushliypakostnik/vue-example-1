<!-- eslint-disable max-len -->

<!-- Logo -->
<template>
    <path
      opacity="0.4"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.7137 0.64472C14.1141 0.135149 14.886 0.135149 15.2863 0.64472L24.2011 11.9908C24.6423 12.5524 24.5448 13.3653 23.9832 13.8066C23.4216 14.2478 22.6087 14.1502 22.1674 13.5887L20.0042 10.8355C17.2016 7.26853 11.7984 7.26853 8.99579 10.8355L6.83261 13.5887C6.39137 14.1502 5.57842 14.2478 5.01684 13.8066C4.45525 13.3653 4.3577 12.5524 4.79894 11.9908L13.7137 0.64472Z"
      fill="iconColor"/>
</template>

<script>
export default {
  name: 'Logo',

  props: {
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
};
</script>
