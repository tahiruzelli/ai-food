import * as React from "react";
import Svg, { Path } from "react-native-svg";

function DocumentsIcon2(props: any) {
  return (
    <Svg
      width={14}
      height={18}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.615 3.46H2.231A1.23 1.23 0 001 4.693v11.077a1.23 1.23 0 001.23 1.23h7.385a1.23 1.23 0 001.231-1.23V4.692a1.23 1.23 0 00-1.23-1.231zM3.46 6.54h4.924M3.46 9.615h4.924M3.46 12.691h2.462"
        stroke="#0085FF"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.078 1h8a1.23 1.23 0 011.23 1.23v11.693"
        stroke="#0085FF"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default DocumentsIcon2;
