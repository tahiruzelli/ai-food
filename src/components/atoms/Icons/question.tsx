import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function QuestionIcon(props: any) {
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
        d="M9 17A8 8 0 109 .999 8 8 0 009 17z"
        stroke={props.strokeColor ?? "#0085FF"}
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.846 6.846a2.153 2.153 0 013.439-1.73 2.157 2.157 0 01-.086 3.522A2.154 2.154 0 019.002 9v1.436M9 13.257a.308.308 0 110-.615M9 13.257a.308.308 0 100-.615"
        stroke={props.color ?? "#0085FF"}
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
