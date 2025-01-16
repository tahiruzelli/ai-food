import { StyleSheet, TouchableOpacity, View } from "react-native";
import { NotificationIcon, PersonIcon } from "../../atoms/Icons";
import CircleView from "../../atoms/circle-view";
import Greetings from "./greetings";
import { Colors } from "../../../utils/constans/colors";

export default function HomeHeader() {
  return (
    <View style={styles.headerStyle}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CircleView color={Colors.action} height={48} width={48}>
          <PersonIcon></PersonIcon>
        </CircleView>
        <Greetings></Greetings>
        <TouchableOpacity onPress={() => {}}>
          <CircleView
            children={
              <NotificationIcon
                color={Colors.white}
                height={18}
                width={18}
              ></NotificationIcon>
            }
            color={"#3771F5"}
            height={40}
            width={40}
          ></CircleView>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    paddingTop: 100,
    paddingBottom: 30,
    paddingHorizontal: 16,
    zIndex: 2,
  },
});
