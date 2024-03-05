import React from "react";
import { ScrollView } from "react-native";

import { styles } from "./styles";
import { Ingredient, Selected } from "./components";
import { useIngredients } from "./ingredients.hook";

export function Ingredients() {
  const { handleToggleSelected, handleClearSelected, selectedItems } =
    useIngredients();

  return (
    <>
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
      {selectedItems.length > 0 && (
        <Selected
          quantity={selectedItems.length}
          onClear={handleClearSelected}
          onSearch={() => {}}
        />
      )}
    </>
  );
}
