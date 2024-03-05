import { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";

import { services } from "@/services";

type LocalSearchParamsId = {
  "ingredients-id": string;
};

export function useRecipes() {
  const params = useLocalSearchParams<LocalSearchParamsId>();

  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
  const [recipes, setRecipes] = useState<RecipeResponse[]>([]);

  const ingredientsIds = params["ingredients-id"].split(",");

  function handleBackPress() {
    router.back();
  }

  function handleOpenRecipe(id: string) {
    router.navigate("/recipe/" + id);
  }

  const imagePath = services.storage.imagePath;

  useEffect(() => {
    services.ingredients.findByIds(ingredientsIds).then(setIngredients);
  }, []);

  useEffect(() => {
    services.recipes.findByIngredientsIds(ingredientsIds).then(setRecipes);
  }, []);

  return {
    handleBackPress,
    handleOpenRecipe,
    ingredients,
    recipes,
    imagePath,
  };
}
