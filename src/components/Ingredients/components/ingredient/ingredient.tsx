import React from "react";
import { Image, Pressable, PressableProps, Text } from "react-native";

import { styles } from "./styles";

import type { IngredientProps as GlobalIngredientProps } from "@/components/Ingredients/types";

type IngredientProps = Omit<GlobalIngredientProps, "id">;

export function Ingredient({
  name,
  image,
  selected = false,
  ...rest
}: PressableProps & IngredientProps) {
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  );
}
