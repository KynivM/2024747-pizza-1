<template>
  <div id="app">
    <app-layout-header />
    <app-layout-sidebar>
      <slot />
    </app-layout-sidebar>
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import AppLayoutSidebar from "@/layouts/AppLayoutSidebar";
export default {
  name: "AppLayoutOther",
  components: { AppLayoutHeader, AppLayoutSidebar },
};
</script>