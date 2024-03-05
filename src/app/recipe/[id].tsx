import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Redirect } from "expo-router";

import { Step } from "@/components/Step";
import { Loading } from "@/components/Loading";
import { Ingredients } from "@/components/Ingredients";

import { useRecipe } from "./recipe.hook";
import { styles } from "./styles";

export default function Recipes() {
  const {
    id,
    ingredients,
    isLoading,
    preparations,
    recipe,
    handleGoBack,
    imagePath,
  } = useRecipe();

  if (isLoading) {
    return <Loading />;
  }

  if (!id || !recipe) {
    return <Redirect href="/" />;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />

      <View style={styles.body}>
        <View style={styles.header}>
          <MaterialIcons size={32} name="arrow-back" onPress={handleGoBack} />

          <Text style={styles.name}>{recipe.name}</Text>
          <Text style={styles.time}>{recipe.minutes} minutos de preparo</Text>
        </View>

        <View style={styles.ingredientsContainer}>
          <Ingredients ingredients={ingredients} imagePath={imagePath} />
        </View>

        <View style={styles.content}>
          <Text style={styles.preparation}>Modo de preparado</Text>

          <FlatList
            data={preparations}
            renderItem={({ item }) => (
              <Step step={item.step} description={item.description} />
            )}
            contentContainerStyle={{ gap: 16 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}
