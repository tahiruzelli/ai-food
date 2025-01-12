import * as React from "react";
import Svg, { Circle } from "react-native-svg";

export default function HorizontalDots(props: any) {
  return (
    <Svg
      width={props.width ?? 24}
      height={props.height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={5} cy={12} r={2} stroke="#1C274C" strokeWidth={1.5} />
      <Circle
        opacity={0.5}
        cx={12}
        cy={12}
        r={2}
        stroke={props.color ?? "#1C274C"}
        strokeWidth={1.5}
      />
      <Circle
        cx={19}
        cy={12}
        r={2}
        stroke={props.color ?? "#1C274C"}
        strokeWidth={1.5}
      />
    </Svg>
  );
}
