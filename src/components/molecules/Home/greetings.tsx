import { View, StyleSheet } from "react-native";
import AppText from "../../atoms/app-text";
import { Colors } from "../../../utils/constans/colors";

export default function Greetings() {
  const now = Number(Date().split(" ")[4].split(":")[0]);
  var greetings = "Merhaba";
  if (now >= 5 && now < 12) {
    greetings = "Günaydın";
  } else if (now >= 12 && now < 19) {
    greetings = "İyi Günler";
  } else if (now >= 19 || now < 5) {
    greetings = "İyi Akşamlar";
  }

  return (
    <View style={{ marginLeft: 14, flex: 1 }}>
      <AppText style={styles.greetingsStyle}>{greetings}</AppText>
      <AppText style={styles.nameStyle}>Tahir Uzelli</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.white,
    marginTop: 2,
  },
  greetingsStyle: {
    fontSize: 12,
    fontWeight: "300",
    color: Colors.white,
    marginBottom: 2,
  },
});
