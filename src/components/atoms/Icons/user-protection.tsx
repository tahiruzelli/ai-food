import * as React from "react";
import Svg, { Path } from "react-native-svg";

function UserProtectionIcon(props: any) {
  return (
    <Svg
      width={39}
      height={39}
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.948 13.816a6.321 6.321 0 100-12.642 6.321 6.321 0 000 12.642zM16.756 18.34A12.613 12.613 0 001.305 30.672v4.214h15.451M29.875 37.612a1.406 1.406 0 01-.955 0 12.586 12.586 0 01-7.95-11.687v-3.68a1.32 1.32 0 011.404-1.405h14.047a1.32 1.32 0 011.405 1.404v3.68a12.586 12.586 0 01-7.95 11.688z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M32.609 26.217l-3.479 4.174L27.392 29"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default UserProtectionIcon;
