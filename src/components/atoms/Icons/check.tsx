import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CheckIcon(props: any) {
  return (
    <Svg
      width={10}
      height={8}
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.656.8L9.788 1.93 4.13 7.588l-.069-.069-.068.069L.6 4.194 1.73 3.063l2.331 2.331L8.656.8z"
        fill="#fff"
      />
    </Svg>
  );
}

export default CheckIcon;
