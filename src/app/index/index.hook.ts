import { useEffect, useState } from "react";

import { services } from "@/services";

export function useIndex() {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

  useEffect(() => {
    services.ingredients.findAll().then(setIngredients);
  }, []);

  return {
    ingredients,
  };
}
