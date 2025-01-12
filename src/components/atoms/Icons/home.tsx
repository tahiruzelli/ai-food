import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../../utils/constans/colors";

export default function HomeIcon(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.288 5L12.729.89a4.63 4.63 0 00-5.459 0L1.72 5A4.14 4.14 0 000 8.34v7.43a4.34 4.34 0 004.44 4.229h11.119a4.34 4.34 0 004.44-4.23V8.33A4.15 4.15 0 0018.288 5zm.21 10.769a2.84 2.84 0 01-2.94 2.73H4.44a2.85 2.85 0 01-2.94-2.73v-7.43A2.65 2.65 0 012.61 6.2l5.55-4.1a3.12 3.12 0 013.679 0l5.55 4.11a2.61 2.61 0 011.11 2.12v7.44zM5.5 13.749h9a.75.75 0 010 1.5h-9a.75.75 0 010-1.5z"
        fill={props.color ?? Colors.navy}
      />
    </Svg>
  );
}
