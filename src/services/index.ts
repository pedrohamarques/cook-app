import * as ingredients from "./ingredients-services";
import * as recipes from "./recipes-service";
import * as preparations from "./preparations-service";

export const services = {
  ingredients,
  recipes,
  preparations,
  storage: {
    imagePath:
      "https://mqwedvgigyjtdlwlvtsx.supabase.co/storage/v1/object/public/ingredients",
  },
};
