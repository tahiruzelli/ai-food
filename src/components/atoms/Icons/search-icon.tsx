import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SearchIcon2(props: any) {
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
        d="M9.462 17.923a8.461 8.461 0 100-16.922 8.461 8.461 0 000 16.922zM20.999 21l-5.385-5.385"
        stroke="#3E3E3E"
        strokeWidth={1.71429}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SearchIcon2;
