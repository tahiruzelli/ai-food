import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { HomeIcon, ProfileIcon, SearchIcon } from "../../atoms/Icons";
import CircleView from "../../atoms/circle-view";
import { Colors } from "../../../utils/constans/colors";

interface BottomNavigationBarProps {
  index: number;
  onTap: (index: number) => void;
}

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({
  index,
  onTap,
}) => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => onTap(0)} style={styles.iconStyle}>
          <HomeIcon color={index == 0 ? Colors.hover : Colors.navy}></HomeIcon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onTap(1)} style={styles.iconStyle}>
          <CircleView
            children={<SearchIcon></SearchIcon>}
            color={index == 2 ? Colors.hover : Colors.navy}
            height={48}
            width={48}
          ></CircleView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onTap(2)} style={styles.iconStyle}>
          <ProfileIcon
            color={index == 4 ? Colors.hover : Colors.navy}
          ></ProfileIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BottomNavigationBar;

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 10,
    paddingBottom: Platform.OS === "ios" ? 20 : 15,
    backgroundColor: Colors.white,
    alignItems: "center",
    flexDirection: "row",
  },
  viewStyle: {
    zIndex: 2,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconStyle: {
    flex: 1,
    alignItems: "center",
  },
});
