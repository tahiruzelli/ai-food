import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../utils/constans/colors";
import { PropsWithChildren } from "react";
import AppText from "../../atoms/app-text";

type CategoryCardProps = PropsWithChildren<{
  title: string;
  image: any;
}>;

export default function PopulerCategoryCard({
  children,
  title,
  image,
}: CategoryCardProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.container}>
      {image}
      <AppText style={styles.title}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: 8,
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    borderRadius: 8,
    marginRight: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.navy,
  },
});
