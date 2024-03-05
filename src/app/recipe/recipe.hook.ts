import { services } from "@/services";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export function useRecipe() {
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState<RecipeResponse | null>(null);
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
  const [preparations, setPreparations] = useState<PreparationsResponse[]>([]);

  const { id } = useLocalSearchParams<{ id: string }>();

  const imagePath = services.storage.imagePath;

  function handleGoBack() {
    router.back();
  }

  useEffect(() => {
    services.recipes
      .show(id)
      .then((response) => setRecipe(response))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    services.ingredients
      .findByRecipeId(id)
      .then((response) => setIngredients(response));
  }, []);

  useEffect(() => {
    services.preparations
      .findByRecipeId(id)
      .then((response) => setPreparations(response));
  }, []);

  return {
    isLoading,
    recipe,
    ingredients,
    preparations,
    id,
    imagePath,
    handleGoBack,
  };
}
