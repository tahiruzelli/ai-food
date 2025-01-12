import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SortIcon2(props: any) {
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
        d="M4 8h9"
        stroke="#0F5FBD"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        opacity={0.7}
        d="M6 13h7"
        stroke="#0F5FBD"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        opacity={0.4}
        d="M8 18h5"
        stroke="#0F5FBD"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M17 20V4l3 4"
        stroke="#0F5FBD"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SortIcon2;
