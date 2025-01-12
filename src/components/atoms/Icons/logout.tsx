import * as React from "react";
import Svg, { Path } from "react-native-svg";

function LogoutIcon(props: any) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.077 13.308v2.461A1.23 1.23 0 0110.847 17H2.23A1.23 1.23 0 011 15.77V2.23A1.23 1.23 0 012.23 1h8.616a1.23 1.23 0 011.23 1.23v2.462M8.385 9H17M14.54 6.539L17 9l-2.46 2.462"
        stroke="#E9344C"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default LogoutIcon;
