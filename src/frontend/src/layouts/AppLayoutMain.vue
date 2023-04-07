<template>
  <div id="app">
    <app-layout-header />
    <slot />
  </div>
</template>
<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
export default {
  name: "AppLayoutMain",
  components: { AppLayoutHeader },
};
</script>
<style scoped>
#app {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>