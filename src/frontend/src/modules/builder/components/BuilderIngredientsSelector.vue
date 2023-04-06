<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>

    <ul class="ingredients__list">
      <li
        class="ingredients__item"
        v-for="ingredient in ingredients"
        :key="ingredient.id"
      >
        <app-drag
          :transferData="{
            [ingredient.name_eng]: selectedIngredients[ingredient.name_eng]
              ? selectedIngredients[ingredient.name_eng] + 1
              : 1,
          }"
        >
          <selector-item
            class="filling"
            :class-list="`filling--${ingredient.name_eng}`"
            >{{ ingredient.name }}</selector-item
          >
        </app-drag>
        <item-counter
          class="ingredients__counter"
          :start-value="selectedIngredients[ingredient.name_eng]"
          :max-amount="$options.MAX_INGREDIENTS_AMOUNT"
          @change-counter-value="selectIngredient($event, ingredient.name_eng)"
        ></item-counter>
      </li>
    </ul>
  </div>
</template>
<script>
import ItemCounter from "@/common/components/ItemCounter";
import SelectorItem from "@/common/components/SelectorItem";
import AppDrag from "@/common/components/AppDrag";
export default {
  name: "BuilderIngredientsSelector",
  MAX_INGREDIENTS_AMOUNT: 3,
  components: {
    ItemCounter,
    SelectorItem,
    AppDrag,
  },
  props: {
    ingredients: {
      required: true,
      type: Array,
    },
    selectedIngredients: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    selectIngredient(amount, ingredientName) {
      this.$emit("select-ingredient", { [ingredientName]: amount });
    },
  },
};
</script>
