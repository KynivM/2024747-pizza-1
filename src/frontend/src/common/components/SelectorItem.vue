<template>
  <span class="filling" :class="classList">
    <slot />
  </span>
</template>
<script>
export default {
  name: "SelectorItem",
  props: {
    classList: {
      type: String,
    },
  },
};
</script>
