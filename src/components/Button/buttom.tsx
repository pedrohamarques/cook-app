import React from "react";
import { Text, TouchableOpacity } from "react-native";

import type { TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.button]} {...rest}>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
}
