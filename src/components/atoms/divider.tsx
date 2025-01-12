import React from "react";
import { View } from "react-native";
import { Colors } from "../../utils/constans/colors";
import dimensions from "../../utils/helpers/dimensions";

interface DividerProps {
  width?: number;
  color?: string;
  marginTop?: number;
  marginBottom?: number;
  flex?: number;
}

const Divider: React.FC<DividerProps> = ({
  width,
  color,
  marginTop,
  marginBottom,
  flex,
}) => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: color ?? Colors.background,
        width:
          flex === undefined ? width ?? dimensions().width - 32 : undefined,
        flex: flex,
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
    ></View>
  );
};

export default Divider;
