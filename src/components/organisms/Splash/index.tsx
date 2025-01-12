import { StyleSheet, View } from "react-native";
import { useEffect } from "react";
import { Logo } from "../../atoms/Icons";
import { Colors } from "../../../utils/constans/colors";
import dimensions from "../../../utils/helpers/dimensions";
import { router } from "expo-router";
import { PageRoutes } from "../../../utils/constans/page-routes";

export default function SplashOrganism({}) {
  useEffect(() => {
    setTimeout(() => {
      router.replace(PageRoutes.home);
    }, 2000);
  }, []);

  return (
    <View style={styles.body}>
      <Logo></Logo>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.hover,
    height: dimensions().height,
    width: dimensions().width,
    alignItems: "center",
    justifyContent: "center",
  },
});
