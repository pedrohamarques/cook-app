import { useState } from "react";

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

  return {
    selectedItems,
    handleToggleSelected,
  };
}
