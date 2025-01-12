import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../../utils/constans/colors";

export default function ProfileIcon(props: any) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 12.538a3.846 3.846 0 100-7.692 3.846 3.846 0 000 7.692zM4.43 18.539a7.692 7.692 0 0113.14 0"
        stroke={props.color ?? Colors.navy}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 21a10 10 0 100-20 10 10 0 000 20z"
        stroke={props.color ?? Colors.navy}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
