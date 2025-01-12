import React from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import AppText from "./app-text";
import { buttonProperties, ButtonTypes } from "../../utils/enums/button-types";
import { Colors } from "../../utils/constans/colors";

interface ButtonProps {
  type: ButtonTypes;
  title: string;
  onTap: () => void;
  isLoading?: boolean;
  borderRadius?: number;
  paddingHorizontal?: number;
  color?: string;
  textColor?: string;
  width?: number;
  marginTop?: number;
  marginBottom?: number;
  Icon?: any;
  Icon2?: any;
  borderColor?: string;
}

const AppButton: React.FC<ButtonProps> = ({
  type,
  title,
  onTap,
  isLoading,
  borderRadius,
  paddingHorizontal,
  color,
  textColor,
  width,
  marginTop,
  marginBottom,
  Icon,
  Icon2,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      disabled={type == ButtonTypes.deactive}
      onPress={() => onTap()}
    >
      <View
        style={{
          backgroundColor: color ?? buttonProperties[type].backgroundColor,
          borderColor: borderColor ?? buttonProperties[type].borderColor,
          borderWidth:
            borderColor === undefined
              ? buttonProperties[type].borderColor == null
                ? 0
                : 1
              : 2,
          marginHorizontal: paddingHorizontal ?? 16,
          borderRadius: borderRadius ?? 111,
          paddingVertical: 18,
          width: width,
          marginTop: marginTop,
          marginBottom: marginBottom,
        }}
      >
        {isLoading ? (
          <ActivityIndicator color={Colors.white} />
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              height: 20,
            }}
          >
            {Icon === undefined ? <View></View> : Icon}
            <AppText
              style={{
                color: textColor ?? buttonProperties[type].textColor,
                alignSelf: "center",
                fontSize: 14,
                fontWeight: "500",
                marginLeft: Icon === undefined ? 0 : 4,
                marginRight: Icon2 === undefined ? 0 : 4,
              }}
            >
              {title}
            </AppText>
            {Icon2 === undefined ? <View></View> : Icon2}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;
