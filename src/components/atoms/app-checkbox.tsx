import { StyleSheet, View } from "react-native";
import { Colors } from "../../utils/constans/colors";
import { CheckIcon } from "./Icons";

export default function AppCheckbox(props: any) {
  return (
    <View
      style={[
        props.isSelected
          ? styles.selectedContainer
          : styles.unselectedContainer,
        { borderRadius: props.borderRadius ?? 3 },
      ]}
    >
      <CheckIcon></CheckIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  selectedContainer: {
    borderRadius: 3,
    height: 16,
    width: 16,
    backgroundColor: Colors.hover,
    alignItems: "center",
    justifyContent: "center",
  },
  unselectedContainer: {
    borderWidth: 1,
    borderColor: Colors.navy,
    borderRadius: 3,
    height: 16,
    width: 16,
  },
});
