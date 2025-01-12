import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PhoneIcon(props: any) {
  return (
    <Svg
      width={38}
      height={38}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.168 35.59a8.831 8.831 0 01-11.07-1.218l-1.246-1.218a2.99 2.99 0 010-4.179l5.286-5.23a2.961 2.961 0 014.152 0 2.99 2.99 0 004.179 0l8.303-8.304a2.934 2.934 0 000-4.18 2.962 2.962 0 010-4.15l5.259-5.26a2.99 2.99 0 014.179 0l1.218 1.246a8.83 8.83 0 011.217 11.071A80.098 80.098 0 0114.168 35.59z"
        stroke="#fff"
        strokeWidth={1.71429}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PhoneIcon;
