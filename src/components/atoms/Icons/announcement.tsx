import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AnnouncementIcon(props: any) {
  return (
    <Svg
      width={18}
      height={16}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.922 10.37l9.452 3.15a1.23 1.23 0 001.108-.171 1.23 1.23 0 00.517-.997V2.222a1.231 1.231 0 00-1.625-1.156l-9.452 3.15v6.154z"
        stroke="#0085FF"
        strokeWidth={1.41}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 7.294a3.077 3.077 0 003.077 3.077h1.846V4.217H4.077A3.077 3.077 0 001 7.294z"
        stroke="#0085FF"
        strokeWidth={1.41}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.076 10.37v1.23a3.077 3.077 0 003.077 3.078"
        stroke="#0085FF"
        strokeWidth={1.41}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default AnnouncementIcon;
