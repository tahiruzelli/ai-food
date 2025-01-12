import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PersonEditIcon(props: any) {
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
        d="M7.923 7.923a3.462 3.462 0 100-6.923 3.462 3.462 0 000 6.923zM5.615 19.462H1v-2.308A6.94 6.94 0 0111 11M21 13.307l-7.246 7.247-3.277.446.461-3.277 7.231-7.246 2.83 2.83z"
        stroke="#092256"
        strokeWidth={1.71429}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PersonEditIcon;
