import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import { Colors } from "../../utils/constans/colors";
import AppText from "./app-text";
import { router } from "expo-router";
import { ReplyIcon } from "./Icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";

export default function AppBar(props: any) {
  const [canGoBack, setCanGoBack] = useState(false);
  const insets = useSafeAreaInsets();

  const APPBAR_HEIGHT = Platform.select({
    ios: 44 + insets.top, // iOS için varsayılan yükseklik ve güvenli alan
    android: 56 + (insets.top === 0 ? 0 : StatusBar.currentHeight ?? 20), // Android için varsayılan yükseklik ve durum çubuğu
    default: 50, // Diğer platformlar için varsayılan yükseklik
  });
  useEffect(() => {
    let canGoBack = router.canGoBack();
    if (props.goBack === false) {
      canGoBack = props.goBack;
    }
    setCanGoBack(canGoBack);
  }, []);
  return (
    <View
      style={{
        height: APPBAR_HEIGHT,
        backgroundColor: Colors.white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingTop: Platform.OS === "ios" ? 35 : 0,
      }}
    >
      {canGoBack ? (
        <TouchableOpacity onPress={router.back}>
          <View
            style={{
              paddingVertical: 13,
              paddingHorizontal: 16,
              backgroundColor: Colors.background,
              borderRadius: 111,
            }}
          >
            <ReplyIcon></ReplyIcon>
          </View>
        </TouchableOpacity>
      ) : (
        <View
          style={{ paddingHorizontal: 16, backgroundColor: Colors.transparent }}
        >
          <ReplyIcon color={Colors.transparent}></ReplyIcon>
        </View>
      )}
      <AppText style={styles.title}>{props.title}</AppText>

      {props.action === undefined ? (
        <View
          style={{
            paddingHorizontal: 16,
            backgroundColor: Colors.transparent,
          }}
        >
          <ReplyIcon color={Colors.transparent}></ReplyIcon>
        </View>
      ) : (
        props.action
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.navy,
    fontSize: 18,
    fontWeight: "500",
    // alignSelf: "center",
    // top: 20,
  },
});
