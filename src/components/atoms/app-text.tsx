import React from "react";
import { Text, StyleSheet } from "react-native";

export default function AppText(props: any) {
  const fontFamily =
    props.style?.fontWeight === "100"
      ? "Axiforma-Thin"
      : props.style?.fontWeight === "200"
      ? "Axiforma-Light"
      : props.style?.fontWeight === "300"
      ? "Axiforma-Light"
      : props.style?.fontWeight === "400"
      ? "Axiforma-Regular"
      : props.style?.fontWeight === "500"
      ? "Axiforma-Medium"
      : props.style?.fontWeight === "600"
      ? "Axiforma-SemiBold"
      : props.style?.fontWeight === "700"
      ? "Axiforma-Bold"
      : props.style?.fontWeight === "800"
      ? "Axiforma-ExtraBold"
      : props.style?.fontWeight === "900"
      ? "Axiforma-Black"
      : "Axiforma-Regular";
  return (
    <Text
      onPress={props.onPress}
      style={[{ fontFamily: fontFamily }, props.style]}
    >
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  // ... add your default style here
  defaultStyle: {
    fontFamily: "Axiforma-Medium",
  },
});
