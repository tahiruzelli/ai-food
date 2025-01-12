import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../../utils/constans/colors";

export default function JobsIcon(props: any) {
  return (
    <Svg
      width={props.width ?? 22}
      height={props.height ?? 22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.999 7.153h20V20.23a.77.77 0 01-.77.77H1.77a.769.769 0 01-.77-.77V7.153z"
        stroke={props.color ?? Colors.navy}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M.999 7.154A6.154 6.154 0 017.153 1h7.692A6.154 6.154 0 0121 7.154M17.152 21V12.54a.77.77 0 00-.769-.77H5.614a.77.77 0 00-.77.77V21M4.845 14.847h12.307M4.845 17.923h12.307"
        stroke={props.color ?? Colors.navy}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
