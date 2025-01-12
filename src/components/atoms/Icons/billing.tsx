import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BillingIcon(props: any) {
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
        d="M2.846 17H14.54A2.461 2.461 0 0017 14.539V1l-3.077 1.846L10.846 1 7.77 2.846 4.692 1v14.154A1.846 1.846 0 012.846 17zm0 0A1.846 1.846 0 011 15.154v-4.308h3.692"
        stroke="#0085FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BillingIcon;
