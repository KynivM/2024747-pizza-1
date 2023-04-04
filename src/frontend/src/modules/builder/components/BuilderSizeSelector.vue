<template>
  <radio-button
    class="diameter__input"
    :class="`diameter__input--${size.name_eng}`"
    :group-name="'diameter'"
    :radio-button-value="size.name_eng"
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
