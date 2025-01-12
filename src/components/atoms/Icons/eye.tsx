import * as React from "react";
import Svg, { Path } from "react-native-svg";

function EyeIcon(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.5}
        d="M2.728 12.747c-.708-.92-1.062-1.38-1.062-2.747 0-1.366.354-1.826 1.062-2.746C4.143 5.416 6.514 3.334 10 3.334s5.857 2.082 7.271 3.92c.709.92 1.063 1.38 1.063 2.746s-.354 1.826-1.063 2.747c-1.414 1.837-3.786 3.92-7.27 3.92-3.486 0-5.857-2.083-7.272-3.92z"
        stroke="#0F5FBD"
        strokeWidth={1.5}
      />
      <Path
        d="M12.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        stroke="#0F5FBD"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default EyeIcon;
