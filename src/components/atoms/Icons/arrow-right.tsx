import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowRightIcon(props: any) {
  return (
    <Svg
      width={7}
      height={12}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 1l5 5-5 5"
        stroke="#092256"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default ArrowRightIcon;
