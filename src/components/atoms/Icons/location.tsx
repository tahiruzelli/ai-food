import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function LocationIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.5}
        d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 01-2.926 0C6.553 19.812 4 14.605 4 10.144z"
        stroke="#0F5FBD"
        strokeWidth={1.5}
      />
      <Circle cx={12} cy={10} r={3} stroke="#0F5FBD" strokeWidth={1.5} />
    </Svg>
  );
}

export default LocationIcon;
