import * as React from "react";
import Svg, { Path } from "react-native-svg";
export default function BillCheckIcon(props: any) {
  return (
    <Svg
      width={props.width ?? 17}
      height={props.height ?? 16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.5}
        d="M11.67 1.333H5.33c-.773 0-1.159 0-1.47.109a2.03 2.03 0 00-1.255 1.291c-.105.32-.105.719-.105 1.514v9.336c0 .572.657.876 1.072.496a.63.63 0 01.856 0l.322.294a1.105 1.105 0 001.5 0 1.105 1.105 0 011.5 0 1.105 1.105 0 001.5 0 1.105 1.105 0 011.5 0 1.105 1.105 0 001.5 0l.322-.294a.63.63 0 01.856 0c.415.38 1.072.076 1.072-.496V4.247c0-.795 0-1.193-.105-1.514a2.03 2.03 0 00-1.255-1.291c-.311-.109-.697-.109-1.47-.109z"
        stroke={props.color ?? "#E9344C"}
      />
      <Path
        d="M6.833 6.934L7.785 8l2.381-2.667"
        stroke={props.color ?? "#E9344C"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.5 10.334h6"
        stroke={props.color ?? "#E9344C"}
        strokeLinecap="round"
      />
    </Svg>
  );
}
