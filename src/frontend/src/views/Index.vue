<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <div class="content__dough">
          <app-sheet>
            <template #sheet-title>Выберите тесто</template>
            <builder-dough-selector
              :dough="dough"
              v-for="dough in pizza.dough"
              :key="dough.id"
              @select-dough="selectedDough = $event"
            />
          </app-sheet>
        </div>

        <div class="content__diameter">
          <app-sheet>
            <template #sheet-title>Выберите размер</template>
            <builder-size-selector
              :size="size"
              v-for="size in pizza.sizes"
              :key="size.id"
              @select-size="selectedSize = $event"
            />
          </app-sheet>
        </div>

        <div class="content__ingredients">
          <app-sheet>
            <template #sheet-title>Выберите ингредиенты</template>
            <builder-sauce-selector
              :sauces="pizza.sauces"
              @select-sauce="selectedSauce = $event"
            />
            <builder-ingredients-selector
              :ingredients="pizza.ingredients"
              :selected-ingredients="selectedIngredients"
              @select-ingredient="selectIngredient"
            />
          </app-sheet>
        </div>

        <div class="content__pizza">
          <builder-pizza-view
            :pizza-sauce="selectedSauce.name_eng"
            :pizza-dogh="selectedDough.name_eng"
            :selected-ingredients="selectedIngredients"
            @pizza-name-change="pizzaName = $event"
            @update-ingredients="selectIngredient($event)"
          />
          <builder-price-counter
            :ingredients-price="ingredientsPrice"
            :sauce-price="selectedSauce.price"
            :dough-price="selectedDough.price"
            :size-multiplier="selectedSize.multiplier"
            :is-order-ready="isOrderReady"
          />
        </div>
      </div>
    </form>
  </main>
</template>
<script>
import AppSheet from "@/common/components/AppSheet";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderSauceSelector from "@/modules/builder/components/BuilderSauceSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";
import pizza from "@/static/pizza.json";
export default {
  name: "Index",
  components: {
    AppSheet,
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderSauceSelector,
    BuilderPizzaView,
    BuilderPriceCounter,
  },
  data() {
    return {
      pizza,
      selectedIngredients: {},
      selectedSauce: {},
      selectedDough: {},
      selectedSize: {},
      pizzaName: "",
    };
  },
  computed: {
    ingredientsPrice() {
      let price = 0;
      Object.entries(this.selectedIngredients).forEach((selectedIngredient) => {
        this.pizza.ingredients.map((ingredient) => {
          if (ingredient.name_eng == selectedIngredient[0])
            price += ingredient.price * selectedIngredient[1];
        });
      });
      return price;
    },
    isOrderReady() {
      return (
        Object.keys(this.selectedIngredients).length !== 0 &&
        this.pizzaName.length !== 0 &&
        Object.keys(this.selectedDough).length !== 0 &&
        Object.keys(this.selectedSauce).length !== 0 &&
        Object.keys(this.selectedSize).length !== 0
      );
    },
    pizzaOrder() {
      return {
        pizzaName: this.pizzaName,
        dough: this.selectedDough,
        ingredients: Object.entries(this.selectedIngredients).map((entry) => {
          return { name_eng: entry[0], amount: entry[1] };
        }),
        sauce: this.selectedSauce,
        size: this.selectedSize,
      };
    },
  },
  methods: {
    selectIngredient(ingredientToSelect) {
      this.selectedIngredients = {
        ...this.selectedIngredients,
        ...ingredientToSelect,
      };
      if (Object.values(ingredientToSelect)[0] === 0) {
        delete this.selectedIngredients[Object.keys(ingredientToSelect)[0]];
      }
    },
  },
};
</script>
