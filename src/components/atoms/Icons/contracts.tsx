import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ContractsIcon(props: any) {
  return (
    <Svg
      width={17}
      height={18}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.517 16.643l-.726.283c-.262.099-.55.099-.812 0l-.727-.283A9.846 9.846 0 011 7.5V4.077A7.828 7.828 0 008.385 1c1.538 2.24 4.086 3.298 7.384 3.077v3.422a9.846 9.846 0 01-6.252 9.144z"
        stroke="#0085FF"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ContractsIcon;
