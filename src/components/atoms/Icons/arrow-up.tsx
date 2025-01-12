import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowUpIcon(props: any) {
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
        d="M12.817 5.542L7.207.258a.975.975 0 00-1.323 0L.274 5.542a.844.844 0 000 1.246.976.976 0 001.322 0l4.95-4.662 4.949 4.662a.975.975 0 001.322 0 .845.845 0 000-1.246z"
        fill="#092256"
      />
    </Svg>
  );
}

export default ArrowUpIcon;
