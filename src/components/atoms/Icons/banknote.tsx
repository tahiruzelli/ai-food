import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function BanknoteIcon(props: any) {
  return (
    <Svg
      width={props.width ?? 21}
      height={props.height ?? 20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.167 8.334c0-2.358 0-3.536.732-4.268.732-.732 1.911-.732 4.268-.732h4.167c2.357 0 3.535 0 4.267.732.733.732.733 1.91.733 4.268 0 2.357 0 3.535-.733 4.267-.732.732-1.91.732-4.267.732H7.167c-2.357 0-3.536 0-4.268-.732-.732-.732-.732-1.91-.732-4.268z"
        stroke={props.color ?? "#24A87B"}
      />
      <Path
        opacity={0.5}
        d="M16.334 5.897c.812.08 1.36.26 1.768.669.732.732.732 1.91.732 4.268 0 2.357 0 3.535-.732 4.267-.733.732-1.911.732-4.268.732H9.667c-2.357 0-3.535 0-4.268-.732-.408-.408-.589-.955-.669-1.768"
        stroke={props.color ?? "#24A87B"}
      />
      <Path
        d="M11.334 8.333a2.083 2.083 0 11-4.167 0 2.083 2.083 0 014.167 0z"
        stroke={props.color ?? "#24A87B"}
      />
      <Path
        opacity={0.5}
        d="M13.833 10V6.667M4.667 10V6.667"
        stroke={props.color ?? "#24A87B"}
        strokeLinecap="round"
      />
    </Svg>
  );
}
