import React from "react";
import { ScrollView } from "react-native";

import { styles } from "./styles";
import { Ingredient, Selected } from "./components";
import { useIngredients } from "./ingredients.hook";

import type { IngredientProps } from "./types";

type IngredientsProps = {
  ingredients: IngredientProps[];
};

export function Ingredients({ ingredients }: IngredientsProps) {
  const {
    handleToggleSelected,
    handleClearSelected,
    handleSearch,
    selectedItems,
    imagePath,
  } = useIngredients();

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {ingredients.map((item) => (
          <Ingredient
            key={item.id}
            image={`${imagePath}/${item.image}`}
            name={item.name}
            onPress={() => handleToggleSelected(item.id)}
            selected={selectedItems.includes(item.id)}
          />
        ))}
      </ScrollView>
      {selectedItems.length > 0 && (
        <Selected
          quantity={selectedItems.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </>
  );
}
