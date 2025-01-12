import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function InformationIcon(props: any) {
  return (
    <Svg
      width={props.width ?? 18}
      height={props.height ?? 18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9 17A8 8 0 109 .999 8 8 0 009 17zM7.152 12.692h3.693"
        stroke={props.color ?? "#0085FF"}
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 12.693V8.385H7.77M9 5.615A.308.308 0 119 5M9 5.615A.308.308 0 109 5"
        stroke={props.color ?? "#0085FF"}
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
