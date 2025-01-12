import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BlankCalendar(props: any) {
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
        d="M1.77 2.154a.77.77 0 00-.77.77v7.307a.77.77 0 00.77.77h8.46a.77.77 0 00.77-.77V2.923a.77.77 0 00-.77-.769H8.693M1 4.846h10M3.308 1v2.308M8.692 1v2.308M3.308 2.154h3.846"
        stroke="#1B18BD"
        strokeWidth={0.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BlankCalendar;
