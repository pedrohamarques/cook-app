import React from "react";
import { Text, View } from "react-native";

import { Ingredients, Selected } from "@/components";

import { styles } from "./styles";
import { useIndex } from "./index.hook";

export default function Index() {
  const {
    ingredients,
    handleClearSelected,
    handleSearch,
    handleToggleSelected,
    imagePath,
    selectedItems,
  } = useIndex();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu.
      </Text>

      <Ingredients
        ingredients={ingredients}
        onItemPress={handleToggleSelected}
        imagePath={imagePath}
        selectedItems={selectedItems}
      />

      {selectedItems.length > 0 && (
        <Selected
          quantity={selectedItems.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </View>
  );
}
