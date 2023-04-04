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
            />
          </app-sheet>
        </div>

        <div class="content__ingredients">
          <app-sheet>
            <template #sheet-title>Выберите ингредиенты</template>
            <builder-sauce-selector :sauces="pizza.sauces" />
            <builder-ingredients-selector :ingredients="pizza.ingredients" />
          </app-sheet>
        </div>

        <div class="content__pizza">
          <builder-pizza-view />
          <builder-price-counter />
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
export default {
  name: "AppLayoutMain",
  components: {
    AppSheet,
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderSauceSelector,
    BuilderPizzaView,
    BuilderPriceCounter,
  },
  props: {
    pizza: {
      type: Object,
    },
  },
};
</script>
