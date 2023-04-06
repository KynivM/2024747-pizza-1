<template>
  <radio-button
    class="dough__input"
    :class="`dough__input--${dough.name_eng}`"
    :group-name="'dough'"
    :radio-button-value="dough.name_eng"
    @change="$emit('select-dough', { name_eng: dough.name_eng, price: dough.price })"
  >
    <b>{{ dough.name }}</b>
    <span>{{ dough.description }}</span>
  </radio-button>
</template>
<script>
import RadioButton from "@/common/components/RadioButton";
export default {
  name: "BuilderDoughSelector",
  components: {
    RadioButton,
  },
  props: {
    dough: {
      type: Object,
      required: true,
    },
  },
};
</script>
