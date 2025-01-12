import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ForwardIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.5 7l5 5-5 5"
        stroke="#1C274C"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity={0.5}
        d="M19.5 12h-10c-1.667 0-5 1-5 5"
        stroke="#1C274C"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default ForwardIcon;
