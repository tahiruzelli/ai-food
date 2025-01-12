import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ReplyIcon(props: any) {
  return (
    <Svg
      width={22}
      height={12}
      viewBox="0 0 22 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6 1L1 6l5 5"
        stroke={props.color ?? "#1C274C"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity={0.5}
        d="M6 6h10c1.667 0 5 1 5 5"
        stroke={props.color ?? "#1C274C"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default ReplyIcon;
