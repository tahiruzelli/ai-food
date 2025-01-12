import * as React from "react";
import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import { Colors } from "../../../utils/constans/colors";

export default function VehicleIcon(props: any) {
  return (
    <Svg
      width={props.width ?? 28}
      height={props.height ?? 22}
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17 5h6a4 4 0 014 4v8h-3M3 17H1V3a2 2 0 012-2h12a2 2 0 012 2v14M16 17h-5"
        stroke={props.color ?? Colors.navy}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.5 21a3.5 3.5 0 110-7 3.5 3.5 0 010 7zM7 21a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
        stroke={props.color ?? Colors.navy}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
