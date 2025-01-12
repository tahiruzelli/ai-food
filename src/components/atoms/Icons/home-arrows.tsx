import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HomeArrowsIcon(props: any) {
  return (
    <Svg
      width={430}
      height={755}
      viewBox="0 0 430 755"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M-.277 142.351a282.007 282.007 0 01247.285-43.609 282.002 282.002 0 01184.024 170.843l-1.056.398A280.873 280.873 0 00.393 143.259l-.67-.908z"
        fill="#2384FB"
      />
      <Path
        d="M-.003 156.662a304.931 304.931 0 01430.431 26.335l-.437.387A304.346 304.346 0 00.384 157.1l-.387-.438z"
        fill="#2384FB"
      />
      <Path
        d="M111 94c-44 5.5-89.5 32-111 48v16s43.885-35.013 77-51c14.5-7 34-13 34-13z"
        fill="#fff"
      />
    </Svg>
  );
}

export default HomeArrowsIcon;
