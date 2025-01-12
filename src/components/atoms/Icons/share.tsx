import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ShareIcon(props: any) {
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
        d="M7.5 9.583a2.083 2.083 0 11-4.167 0 2.083 2.083 0 014.167 0z"
        stroke="#0F5FBD"
        strokeWidth={1.5}
      />
      <Path
        opacity={0.5}
        d="M11.934 14.002L7.5 11.075M12.017 5.7L7.583 8.627"
        stroke="#0F5FBD"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M15.834 15.416a2.083 2.083 0 11-4.167 0 2.083 2.083 0 014.167 0zM15.834 4.583a2.083 2.083 0 11-4.167 0 2.083 2.083 0 014.167 0z"
        stroke="#0F5FBD"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default ShareIcon;
