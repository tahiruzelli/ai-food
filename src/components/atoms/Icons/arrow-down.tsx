import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowDownIcon(props: any) {
  return (
    <Svg
      width={14}
      height={8}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.274 1.504l5.61 5.283a.975.975 0 001.322 0l5.61-5.283a.844.844 0 000-1.246.976.976 0 00-1.322 0L6.546 4.92 1.596.258a.975.975 0 00-1.322 0 .845.845 0 000 1.246z"
        fill="#092256"
      />
    </Svg>
  );
}

export default ArrowDownIcon;
