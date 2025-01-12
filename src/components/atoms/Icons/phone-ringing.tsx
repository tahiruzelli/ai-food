import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PhoneRingingIcon(props: any) {
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
        d="M10.26 20.339a4.165 4.165 0 01-5.192-.554l-.585-.585a1.399 1.399 0 010-1.969l2.465-2.446a1.387 1.387 0 011.956 0 1.403 1.403 0 001.973 0l3.928-3.923a1.4 1.4 0 000-1.97 1.384 1.384 0 010-1.953l2.373-2.462a1.403 1.403 0 011.972 0l.586.585a4.152 4.152 0 01.631 5.184A37.304 37.304 0 0110.26 20.34z"
        fill="#fff"
        stroke="#0085FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.015 1a10.027 10.027 0 00-7.082 2.929A9.993 9.993 0 001 11"
        fill="#fff"
      />
      <Path
        d="M11.015 1a10.027 10.027 0 00-7.082 2.929A9.993 9.993 0 001 11"
        stroke="#0085FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.015 4.846a6.167 6.167 0 00-4.358 1.802A6.15 6.15 0 004.852 11"
        fill="#fff"
      />
      <Path
        d="M11.015 4.846a6.167 6.167 0 00-4.358 1.802A6.15 6.15 0 004.852 11"
        stroke="#0085FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PhoneRingingIcon;
