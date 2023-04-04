<template>
  <div class="index">
    <app-layout :pizza="pizza" />
  </div>
</template>

<script>
import pizza from "@/static/pizza.json";
import AppLayout from "@/layouts/AppLayout.vue";

export default {
  name: "Index",
  components: {
    AppLayout,
  },

  data() {
    return {
      pizza,
    };
  },
};
</script>

<style scoped></style>
