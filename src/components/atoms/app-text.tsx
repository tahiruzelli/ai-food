import React, { PropsWithChildren } from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

type AccordionItemPros = PropsWithChildren<{
  style?: TextStyle;
  onPress?: () => void;
}>;

export default function AppText({
  children,
  style,
  onPress,
}: AccordionItemPros): JSX.Element {
  const fontFamily =
    style?.fontWeight === "100"
      ? "Axiforma-Thin"
      : style?.fontWeight === "200"
      ? "Axiforma-Light"
      : style?.fontWeight === "300"
      ? "Axiforma-Light"
      : style?.fontWeight === "400"
      ? "Axiforma-Regular"
      : style?.fontWeight === "500"
      ? "Axiforma-Medium"
      : style?.fontWeight === "600"
      ? "Axiforma-SemiBold"
      : style?.fontWeight === "700"
      ? "Axiforma-Bold"
      : style?.fontWeight === "800"
      ? "Axiforma-ExtraBold"
      : style?.fontWeight === "900"
      ? "Axiforma-Black"
      : "Axiforma-Regular";
  return (
    <Text onPress={onPress} style={[{ fontFamily: fontFamily }, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  // ... add your default style here
  defaultStyle: {
    fontFamily: "Axiforma-Medium",
  },
});
