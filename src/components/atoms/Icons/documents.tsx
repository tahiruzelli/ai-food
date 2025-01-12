import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function DocumentsIcon(props: any) {
  return (
    <Svg
      width={props.width ?? 20}
      height={props.height ?? 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.5}
        d="M2.5 8.333c0-3.143 0-4.714.976-5.69.977-.976 2.548-.976 5.69-.976h1.667c3.143 0 4.714 0 5.69.976.977.976.977 2.547.977 5.69v3.333c0 3.143 0 4.715-.976 5.69-.977.977-2.548.977-5.69.977H9.166c-3.143 0-4.714 0-5.69-.976-.977-.976-.977-2.548-.977-5.69V8.332z"
        stroke={props.color ?? "#0F5FBD"}
        strokeWidth={1.5}
      />
      <Path
        d="M6.666 10h6.667M6.666 6.667h6.667M6.666 13.334h4.167"
        stroke={props.color ?? "#0F5FBD"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}
