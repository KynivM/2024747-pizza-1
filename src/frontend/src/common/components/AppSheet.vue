<template>
  <div class="sheet">
    <h2 class="title title--small sheet__title">
      <slot name="sheet-title"></slot>
    </h2>
    <div class="sheet__content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "AppSheet",
};
</script>
