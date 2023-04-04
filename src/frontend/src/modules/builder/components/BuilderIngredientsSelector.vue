<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>

    <ul class="ingredients__list">
      <li
        class="ingredients__item"
        v-for="ingredient in ingredients"
        :key="ingredient.id"
      >
        <selector-item
          class="filling"
          :class-list="`filling--${ingredient.name_eng}`"
          >{{ ingredient.name }}</selector-item
        >

        <item-counter class="ingredients__counter"></item-counter>
      </li>
    </ul>
  </div>
</template>
<script>
import ItemCounter from "@/common/components/ItemCounter";
import SelectorItem from "@/common/components/SelectorItem";
export default {
  name: "BuilderIngredientsSelector",
  components: {
    ItemCounter,
    SelectorItem,
  },
  props: {
    ingredients: {
      required: true,
      type: Array,
    },
  },
};
</script>
