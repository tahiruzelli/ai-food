import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PenIcon(props: any) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.155 11.841L1 13.005 2.163 8.85l7.61-7.572a.924.924 0 011.32 0l1.634 1.643a.924.924 0 010 1.312L5.155 11.84z"
        stroke="#092256"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PenIcon;
