import { View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import AppText from "./app-text";
import { ButtonTypes } from "../../utils/enums/button-types";
import { Colors } from "../../utils/constans/colors";
import AppButton from "./app-button";
import AppAnimation from "./lottie";

interface ModalProps {
  isVisible: boolean;
  okFunction: () => void;
  closeFunction?: () => void;
  title: string;
  message: string;
  buttonText?: string;
  buttonTextColor?: string;
  secondButton?: any;
  thirtButton?: any;
  image?: any;
  buttonType?: ButtonTypes;
  height?: number;
}

export const AppPopUp: React.FC<ModalProps> = ({
  isVisible,
  okFunction,
  title,
  message,
  buttonText,
  secondButton,
  thirtButton,
  image,
  buttonType,
  height,
  closeFunction,
  buttonTextColor,
}) => {
  return (
    <Modal
      testID={title}
      isVisible={isVisible}
      style={styles.view}
      onBackdropPress={() => {
        if (closeFunction != undefined) {
          closeFunction();
        } else {
          okFunction();
        }
      }}
    >
      <View style={[styles.content, { height: height ?? undefined }]}>
        {Image(image)}
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.description}>{message}</AppText>
        {thirtButton}
        <View style={{ flexDirection: "row", marginTop: 32, marginBottom: 20 }}>
          <View
            style={{ flex: 1, display: secondButton == null ? "none" : "flex" }}
          >
            {secondButton}
          </View>
          <View style={{ flex: 1 }}>
            <AppButton
              type={buttonType ?? ButtonTypes.clear}
              textColor={buttonTextColor}
              title={buttonText ?? "Tamam"}
              onTap={() => {
                okFunction();
              }}
              borderRadius={111}
              paddingHorizontal={8}
            ></AppButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  view: {
    justifyContent: "flex-end",
    margin: 0,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.navy,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    color: Colors.hover,
    marginBottom: 12,
    fontWeight: "600",
    marginVertical: 12,
    textAlign: "center",
  },
});

function Image(image?: any) {
  if (image == null) {
    return <View></View>;
  } else {
    return <AppAnimation animation={image}></AppAnimation>;
  }
}
