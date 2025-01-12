import * as React from "react";
import Svg, { Path } from "react-native-svg";

function TrashIcon(props: any) {
  return (
    <Svg
      width={props.width ?? 20}
      height={props.height ?? 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.083 5H2.916M15.694 7.083l-.384 5.75c-.147 2.212-.221 3.318-.942 3.993-.72.674-1.83.674-4.047.674h-.644c-2.217 0-3.326 0-4.047-.674-.72-.675-.795-1.78-.942-3.993l-.383-5.75"
        stroke="#E9344C"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        opacity={0.5}
        d="M7.916 9.166l.417 4.167M12.083 9.166l-.417 4.167"
        stroke="#E9344C"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        opacity={0.5}
        d="M5.416 5h.091a1.667 1.667 0 001.525-1.1l.03-.086.08-.243c.07-.207.104-.31.15-.398.182-.351.52-.595.911-.657.098-.016.207-.016.426-.016h2.741c.218 0 .328 0 .426.016.39.062.728.306.911.657.046.088.08.191.15.398l.08.243.03.086A1.667 1.667 0 0014.492 5h.09"
        stroke="#E9344C"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default TrashIcon;
