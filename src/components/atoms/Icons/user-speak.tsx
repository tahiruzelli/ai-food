import * as React from "react";
import Svg, { Rect, Circle, Ellipse, Path } from "react-native-svg";

function UserSpeakIcon(props: any) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={48} height={48} rx={24} fill="#ECF5FF" />
      <Circle cx={22} cy={18} r={4} stroke="#0F5FBD" strokeWidth={1.5} />
      <Ellipse
        opacity={0.5}
        cx={22}
        cy={29}
        rx={7}
        ry={4}
        stroke="#0F5FBD"
        strokeWidth={1.5}
      />
      <Path
        d="M31 14s2 1.2 2 4-2 4-2 4M29 16s1 .6 1 2-1 2-1 2"
        stroke="#0F5FBD"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default UserSpeakIcon;
