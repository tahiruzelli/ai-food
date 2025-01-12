import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../../utils/constans/colors";
import { PropsWithChildren } from "react";
import AppText from "./app-text";

type RegisterInputProps = PropsWithChildren<{
  title?: string;
  subTitle?: string;
  placeHolder?: string;
  onChange: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
  defaultValue?: string;
  value?: string;
  maxLength?: number;
}>;

export default function RegisterInput({
  title,
  subTitle,
  placeHolder,
  onChange,
  keyboardType,
  defaultValue,
  value,
  maxLength,
}: RegisterInputProps): JSX.Element {
  return (
    <View>
      {title && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subTitle}</AppText>
        </View>
      )}
      <View style={styles.container}>
        <TextInput
          selectionColor={Colors.navy}
          style={{ fontSize: 12, fontWeight: "400", color: Colors.navy }}
          placeholder={placeHolder ?? title ?? ""}
          placeholderTextColor={Colors.navy}
          onChangeText={onChange}
          keyboardType={keyboardType}
          defaultValue={defaultValue}
          value={value}
          maxLength={maxLength}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 11,
    fontWeight: "400",
    color: Colors.blackSecondary,
    marginRight: 2,
  },
  title: {
    fontSize: 11,
    fontWeight: "500",
    color: Colors.navy,
    marginLeft: 2,
  },
  container: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginTop: 12,
    marginBottom: 16,
    borderWidth: 1.2,
    borderColor: Colors.borderColor,
  },
});
