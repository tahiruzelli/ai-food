import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FilterIcon(props: any) {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.905c0-.275.223-.499.499-.499h4.324a.499.499 0 110 .998H.5A.499.499 0 010 2.905zM12 9.095a.499.499 0 01-.5.498H7.178a.499.499 0 110-.997H11.5c.275 0 .499.223.499.498zM9.094.998a1.908 1.908 0 100 3.816 1.908 1.908 0 000-3.816zM6.188 2.906a2.906 2.906 0 115.812 0 2.906 2.906 0 01-5.812 0zM2.906 7.186a1.908 1.908 0 110 3.816 1.908 1.908 0 010-3.816zM5.81 9.094a2.906 2.906 0 10-5.811 0 2.906 2.906 0 005.811 0z"
        fill="#fff"
      />
    </Svg>
  );
}

export default FilterIcon;
