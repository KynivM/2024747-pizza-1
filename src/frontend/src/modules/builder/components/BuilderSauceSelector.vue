<template>
  <div class="ingredients__sauce">
    <p>Основной coyc:</p>
    <radio-button
      class="radio ingredients__input"
      v-for="sauce in sauces"
      :key="sauce.id"
      :group-name="'sauce'"
      :radio-button-value="sauce.name_eng"
    >
      <span>{{ sauce.name }}</span>
    </radio-button>
  </div>
</template>
<script>
import RadioButton from "@/common/components/RadioButton";
export default {
  name: "BuilderSauceSelector",
  components: {
    RadioButton,
  },
  props: {
    sauces: {
      required: true,
      type: Array,
    },
  },
};
</script>
