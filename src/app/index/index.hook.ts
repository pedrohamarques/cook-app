import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { router } from "expo-router";

import { services } from "@/services";

export function useIndex() {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  function handleToggleSelected(value: string) {
    console.log(selectedItems, "selectedItems");
    if (selectedItems.includes(value)) {
      return setSelectedItems((state) =>
        state.filter((item) => item !== value),
      );
    }

    setSelectedItems((state) => [...state, value]);
  }

  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => setSelectedItems([]),
      },
    ]);
  }

  function handleSearch() {
    router.navigate("/recipes/" + selectedItems);
  }

  const imagePath = services.storage.imagePath;

  useEffect(() => {
    services.ingredients.findAll().then(setIngredients);
  }, []);

  return {
    ingredients,
    imagePath,
    selectedItems,
    handleSearch,
    handleClearSelected,
    handleToggleSelected,
  };
}
