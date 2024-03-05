import React from "react";
import { ScrollView } from "react-native";

import { styles } from "./styles";
import { Ingredient } from "./components";

import type { IngredientProps } from "./types";

type IngredientsProps = {
  ingredients: IngredientProps[];
  onItemPress: (value: string) => void;
  imagePath: string;
  selectedItems: string[];
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
        contentContainerStyle={styles.container}
      >
        {ingredients.map((item) => (
          <Ingredient
            key={item.id}
            image={`${imagePath}/${item.image}`}
            name={item.name}
            onPress={() => onItemPress(item.id)}
            selected={selectedItems.includes(item.id)}
          />
        ))}
      </ScrollView>
    </>
  );
}
