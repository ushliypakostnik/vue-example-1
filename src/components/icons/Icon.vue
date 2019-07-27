<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    class="icon"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title
      :id="iconName"
      lang="en"
    >{{iconName}} icon</title>
    <g :fill="fill">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Icon',

  props: {
    iconName: {
      type: String,
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
    fill: {
      type: String,
      default: 'currentColor',
    },
  },

  computed: {
    viewBox() {
      return `0 0 ${this.width} ${this.height}`;
    },
  },
};
</script>
