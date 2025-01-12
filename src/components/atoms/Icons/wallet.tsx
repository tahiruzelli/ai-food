import * as React from "react";
import Svg, { Path } from "react-native-svg";

function WalletIcon(props: any) {
  return (
    <Svg
      width={18}
      height={16}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.154 11.462v2.461a1.23 1.23 0 01-1.23 1.23H2.23A1.23 1.23 0 011 13.924v-9.23A3.692 3.692 0 014.692 1h8v3.077"
        stroke="#0085FF"
        strokeWidth={1.41}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.384 7.77h-4.308a.615.615 0 00-.615.615v2.462a.615.615 0 00.615.615h4.308a.615.615 0 00.615-.615V8.385a.615.615 0 00-.615-.615zM15.153 7.77V5.307a1.23 1.23 0 00-1.23-1.23H4.69"
        stroke="#0085FF"
        strokeWidth={1.41}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default WalletIcon;
