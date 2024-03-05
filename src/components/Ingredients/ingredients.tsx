import React from "react";
import { ScrollView } from "react-native";

import { styles } from "./styles";
import { Ingredient } from "./components";
import { useIngredients } from "./ingredients.hook";

export function Ingredients() {
  const { handleToggleSelected, selectedItems } = useIngredients();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {Array.from({ length: 50 }).map((item, index) => (
        <Ingredient
          key={index}
          name="Tomate"
          onPress={() => handleToggleSelected(String(index))}
          selected={selectedItems.includes(String(index))}
        />
      ))}
    </ScrollView>
  );
}
