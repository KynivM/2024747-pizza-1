<template>
  <div id="app-layout">
    <app-layout-header />
    <app-layout-main :pizza="pizza" />
  </div>
</template>
<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import AppLayoutMain from "@/layouts/AppLayoutMain";

export default {
  name: "AppLayout",
  components: {
    AppLayoutHeader,
    AppLayoutMain,
  },

  props: {
    pizza: {
      type: Object,
      required: true,
    },
  },
};
</script>
