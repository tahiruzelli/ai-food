import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CancelIcon(props: any) {
  return (
    <Svg
      width={props.width ?? 14}
      height={props.height ?? 13}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path stroke="#000" d="M2.02055 1.31344L12.6872 11.9801" />
      <Path stroke="#000" d="M1.31344 11.9804L11.9801 1.31377" />
    </Svg>
  );
}

export default CancelIcon;
