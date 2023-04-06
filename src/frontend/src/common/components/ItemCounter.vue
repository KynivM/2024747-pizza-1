<template>
  <div class="counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="!startValue"
      @click="$emit('change-counter-value', startValue - 1)"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="startValue"
      @input="inputHandler($event.target.value)"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      :disabled="startValue >= maxAmount"
      @click="$emit('change-counter-value', startValue + 1)"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "ItemCounter",
  props: {
    startValue: {
      type: Number,
      default: 0,
    },
    maxAmount: {
      type: Number,
      required: true,
    },
  },
  methods: {
    inputHandler(value) {
      if (value > this.maxAmount || value < 0) {
        return;
      }
      this.$emit("change-counter-value", +value);
    },
  },
};
</script>
