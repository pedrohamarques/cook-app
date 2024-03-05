import { useState } from "react";
import { Alert } from "react-native";
import { router } from "expo-router";
import { services } from "@/services";

export function useIngredients() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  function handleToggleSelected(value: string) {
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
    router.navigate("/recipes/");
  }

  const imagePath = services.storage.imagePath;

  return {
    selectedItems,
    imagePath,
    handleToggleSelected,
    handleClearSelected,
    handleSearch,
  };
}
