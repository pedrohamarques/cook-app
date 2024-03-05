import React from "react";
import { FlatList, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Ingredients, Recipe } from "@/components";

import { useRecipes } from "./index.hook";
import { styles } from "./styles";

export default function Recipes() {
  const { handleBackPress, ingredients, recipes, imagePath, handleOpenRecipe } =
    useRecipes();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={32} onPress={handleBackPress} />

        <Text style={styles.title}>Ingredientes</Text>
      </View>

      <View style={styles.ingredientsContainer}>
        <Ingredients ingredients={ingredients} imagePath={imagePath} />
      </View>

      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <Recipe recipe={item} onPress={() => handleOpenRecipe(item.id)} />
        )}
        keyExtractor={(item) => item.id}
        style={styles.recipes}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={styles.recipesContent}
        numColumns={2}
      />
    </View>
  );
}
