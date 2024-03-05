import React from "react";
import { Image, Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

type IngredientProps = PressableProps & {
  name: string;
  image: string;
  selected?: boolean;
};

export function Ingredient({
  name,
  image,
  selected = false,
  ...rest
}: IngredientProps) {
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
      <Image
        source={require("@/assets/images/tomato.png")}
        style={styles.image}
      />
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  );
}
