import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowLeftIcon(props: any) {
  return (
    <Svg
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.425.728l-5.26 5.61a.979.979 0 000 1.323l5.26 5.61a.837.837 0 001.24 0 .98.98 0 000-1.322L3.025 7l4.64-4.948a.979.979 0 000-1.323.838.838 0 00-1.24 0z"
        fill="#000"
      />
    </Svg>
  );
}

export default ArrowLeftIcon;
