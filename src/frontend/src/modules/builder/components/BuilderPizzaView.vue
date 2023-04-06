<template>
  <div class="pizza-view">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        :placeholder="$options.PIZZA_NAME_PLACEHOALDER"
        @input="$emit('pizza-name-change', $event.target.value)"
      />
    </label>

    <div class="content__constructor">
      <div :class="`pizza pizza--foundation--${doughThickness}-${pizzaSauce}`">
        <app-drop @drop="handleUpdateIngredients($event)">
          <div class="pizza__wrapper" v-html="pizzaFilling"></div>
        </app-drop>
      </div>
    </div>
  </div>
</template>
<script>
import AppDrop from "@/common/components/AppDrop";
import { MAX_INGREDIENTS_AMOUNT } from "@/common/constants";
export default {
  name: "BuilderPizzaView",
  components: {
    AppDrop,
  },
  PIZZA_NAME_PLACEHOALDER: "Введите название пиццы",
  props: {
    pizzaDogh: {
      type: String,
      default: "",
    },
    pizzaSauce: {
      type: String,
      default: "",
    },
    selectedIngredients: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    pizzaFilling() {
      let filling = "";
      Object.entries(this.selectedIngredients).map((ingredient) => {
        filling = filling.concat(
          `<div class="pizza__filling pizza__filling--${ingredient[0]}"></div>\n`
        );
        if (ingredient[1] === 2) {
          filling = filling.concat(
            `<div class="pizza__filling pizza__filling--${ingredient[0]} pizza__filling--second"></div>\n`
          );
        }
        if (ingredient[1] === 3) {
          filling = filling.concat(
            `<div class="pizza__filling pizza__filling--${ingredient[0]} pizza__filling--second"></div>\n
             <div class="pizza__filling pizza__filling--${ingredient[0]} pizza__filling--third"></div>\n`
          );
        }
      });
      return filling;
    },
    doughThickness() {
      return this.pizzaDogh === "light" ? "small" : "big";
    },
  },
  methods: {
    handleUpdateIngredients(ingredient) {
      if (Object.values(ingredient)[0] > MAX_INGREDIENTS_AMOUNT) {
        return;
      } 
      this.$emit("update-ingredients", ingredient);
    },
  },
};
</script>
