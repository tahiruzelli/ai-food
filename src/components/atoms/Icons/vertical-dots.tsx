import * as React from "react";
import Svg, { Path } from "react-native-svg";

function VerticalDotsIcon(props: any) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 14.5a1.833 1.833 0 110-3.667A1.833 1.833 0 018 14.5zm-.834-1.833a.833.833 0 101.667 0 .833.833 0 00-1.667 0zM8 9.833a1.833 1.833 0 110-3.666 1.833 1.833 0 010 3.666zM7.165 8a.833.833 0 101.667 0 .833.833 0 00-1.667 0zM6.166 3.333a1.833 1.833 0 103.667 0 1.833 1.833 0 00-3.667 0zm1.833.834A.833.833 0 118 2.5a.833.833 0 010 1.667z"
        fill="#092256"
      />
    </Svg>
  );
}

export default VerticalDotsIcon;
