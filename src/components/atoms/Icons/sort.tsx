import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function SortIcon(props: any) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        opacity={0.8}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M7.858 2H1M7.858 4.571H3.142M7.857 7.142H5.285M13 10.692L10.693 13l-2.308-2.308M10.692 1v12" />
      </G>
    </Svg>
  );
}

export default SortIcon;
