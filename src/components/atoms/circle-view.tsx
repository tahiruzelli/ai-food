import React from "react";
import { View } from "react-native";
import dimensions from "../../utils/helpers/dimensions";

interface CircleViewProps {
  children: any;
  height?: number;
  width?: number;
  color: string;
  marginLeft?: number;
  marginRight?: number;
}

const CircleView: React.FC<CircleViewProps> = ({
  children,
  height,
  width,
  color,
  marginLeft,
  marginRight,
}) => {
  return (
    <View
      style={{
        height: height ? height : 96,
        width: width ? width : 96,
        borderRadius: dimensions()._borderRadius,
        backgroundColor: color,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        overflow: "hidden",
        marginLeft: marginLeft,
        marginRight: marginRight,
      }}
    >
      {children}
    </View>
  );
};

export default CircleView;
