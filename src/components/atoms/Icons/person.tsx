import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PersonIcon(props: any) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.556 20.897a1.538 1.538 0 01-1.108 0A14.88 14.88 0 011 7.047V2.54A1.539 1.539 0 012.539 1h16.927a1.539 1.539 0 011.538 1.539v4.493a14.88 14.88 0 01-9.448 13.865z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.596 16.742a7.686 7.686 0 016.406-3.432 7.692 7.692 0 016.407 3.432M11.003 11.002a3.463 3.463 0 100-6.925 3.463 3.463 0 000 6.925z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PersonIcon;
