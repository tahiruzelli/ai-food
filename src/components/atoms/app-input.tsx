import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../../utils/constans/colors";

export default function AppInput(props: any) {
  return (
    <View style={styles.container}>
      <TextInput
        selectionColor={Colors.black}
        style={{ fontSize: 14, fontWeight: "400" }}
        placeholder={props.placeholder ?? ""}
        placeholderTextColor={"#AFAFAF"}
        onChangeText={props.onChange}
        keyboardType={props.keyboardType ?? "default"}
        defaultValue={props.defaultValue}
        value={props.value}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 6,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginTop: 16,
  },
});
