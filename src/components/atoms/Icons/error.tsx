import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function ErrorIcon(props: any) {
  return (
    <Svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={60} cy={60} r={60} fill="#FFD9DE" />
    </Svg>
  );
}

export default ErrorIcon;
