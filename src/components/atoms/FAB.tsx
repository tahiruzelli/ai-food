import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "../atoms/app-text";
import { Colors } from "../../utils/constans/colors";

interface FABProps {
  title: string;
  color?: string;
  onTap: () => void;
  icon?: any;
  secondIcon?: any;
}

export function FAB({
  title,
  color,
  onTap,
  icon,
  secondIcon,
}: FABProps): JSX.Element {
  return (
    <TouchableOpacity
      onPress={() => {
        onTap();
      }}
      style={[styles.container, { backgroundColor: color ?? Colors.hover }]}
    >
      {icon === undefined ? <View></View> : icon}
      <AppText style={styles.titleStyle}>{title}</AppText>
      {secondIcon === undefined ? <View></View> : secondIcon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 100,
    right: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 111,
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  titleStyle: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: "600",
    marginHorizontal: 8,
  },
});
