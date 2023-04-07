<template>
  <component :is="layout">
    <slot />
  </component>
</template>
<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import AppLayoutMain from "@/layouts/AppLayoutMain";

const defaultLayout = "AppLayoutDefault";

export default {
  name: "AppLayout",
  components: {
    AppLayoutHeader,
    AppLayoutMain,
  },
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>
