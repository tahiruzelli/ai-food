import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BankIcon(props: any) {
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
        d="M16.43 7.053H1.733c-.697 0-.995-.759-.448-1.12l7.348-4.811a.883.883 0 01.896 0l7.348 4.812c.547.36.249 1.119-.447 1.119zM16.542 13.89H1.622a.622.622 0 00-.622.622v1.865a.622.622 0 00.622.622h14.92a.622.622 0 00.622-.622v-1.865a.622.622 0 00-.622-.621zM2.865 7.053v6.838M7.01 7.053v6.838M11.154 7.053v6.838M15.299 7.053v6.838"
        stroke="#0085FF"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BankIcon;
