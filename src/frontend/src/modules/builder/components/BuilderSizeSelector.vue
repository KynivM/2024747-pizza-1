<template>
  <radio-button
    class="diameter__input"
    :class="`diameter__input--${size.name_eng}`"
    :group-name="'diameter'"
    :radio-button-value="size.name_eng"
    @change="$emit('select-size', { name_eng: size.name_eng, multiplier: size.multiplier })"
  >
    <span>{{ size.name }}</span>
  </radio-button>
</template>
<script>
import RadioButton from "@/common/components/RadioButton";
export default {
  name: "BuilderSizeSelector",
  components: {
    RadioButton,
  },
  props: {
    size: {
      required: true,
      type: Object,
    },
  },
};
</script>
