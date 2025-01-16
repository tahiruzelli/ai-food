import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import dimensions from "../../../utils/helpers/dimensions";
import { Colors } from "../../../utils/constans/colors";
import AppText from "../../atoms/app-text";

export default function HomeShortcut(props: any) {
  return (
    <TouchableOpacity
      style={[styles.container, { marginLeft: !props.margin ? 8 : 0 }]}
    >
      <Image
        style={styles.image}
        source={{ uri: props.uri }}
        resizeMode={"cover"}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <AppText
          style={{
            fontSize: 20,
            fontWeight: "400",
            color: Colors.navy,
          }}
        >
          {props.title}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: (dimensions().width - 40) / 2,
    height: (dimensions().width - 72) / 2,
    backgroundColor: Colors.background,
    marginTop: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  image: {
    width: (dimensions().width - 40) / 2,
    height: (dimensions().width - 72) / 3.5,
    overflow: "hidden",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});
