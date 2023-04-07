<template>
  <div class="content__result">
    <p>Итого: {{ totalPrice }} ₽</p>
    <button
      type="button"
      class="button"
      :disabled="!isOrderReady"
      @click="$emit('order-click')"
    >
      Готовьте!
    </button>
  </div>
</template>
<script>
export default {
  name: "BuilderPriceCounter",
  props: {
    ingredientsPrice: {
      type: Number,
      default: 0,
    },
    saucePrice: {
      type: Number,
      default: 0,
    },
    doughPrice: {
      type: Number,
      default: 0,
    },
    sizeMultiplier: {
      type: Number,
      default: 1,
    },
    isOrderReady: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    totalPrice() {
      return (
        (this.ingredientsPrice + this.saucePrice + this.doughPrice) *
        +this.sizeMultiplier
      );
    },
  },
};
</script>
