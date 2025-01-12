import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ShieldIcon(props: any) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M24 44c-2.038 0-2.76-.315-4.203-.946C14.477 40.731 6 35.26 6 23.983v-3.15c0-6.395 0-9.592.755-10.668.755-1.076 3.762-2.105 9.775-4.163l1.145-.393C20.81 4.536 22.377 4 24 4"
        stroke="#0F5FBD"
        strokeWidth={3}
      />
      <Path
        opacity={0.5}
        d="M24 44c2.039 0 2.76-.315 4.203-.945C33.523 40.73 42 35.259 42 23.983v-3.15c0-6.395 0-9.592-.755-10.668-.755-1.076-3.762-2.105-9.775-4.163l-1.145-.393C27.19 4.536 25.623 4 24 4"
        stroke="#0F5FBD"
        strokeWidth={3}
      />
    </Svg>
  );
}

export default ShieldIcon;
