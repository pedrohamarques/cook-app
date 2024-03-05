import React from "react";
import { ScrollView } from "react-native";

import { styles } from "./styles";
import { Ingredient } from "./components";

import type { IngredientProps } from "./types";

type IngredientsProps = {
  ingredients: IngredientProps[];
  onItemPress?: (value: string) => void;
  imagePath: string;
  selectedItems?: string[];
};

export function Ingredients({
  ingredients,
  onItemPress,
  imagePath,
  selectedItems,
}: IngredientsProps) {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.container,
          selectedItems && styles.selectedItemsContainer,
        ]}
      >
        {ingredients.map((item) => (
          <Ingredient
            key={item.ingredient_id}
            image={`${imagePath}/${item.image}`}
            name={item.name}
            onPress={() => onItemPress?.(item.ingredient_id)}
            selected={selectedItems?.includes(item.ingredient_id)}
          />
        ))}
      </ScrollView>
    </>
  );
}
