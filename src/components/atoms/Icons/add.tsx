import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AddIcon(props: any) {
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
        opacity={0.5}
        d="M22 12A10 10 0 1112 2"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M15 12h-3m0 0H9m3 0V9m0 3v3M14.5 2.314c3.514.905 6.28 3.671 7.185 7.185"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default AddIcon;
