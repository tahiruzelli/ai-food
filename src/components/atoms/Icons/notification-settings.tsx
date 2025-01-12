import * as React from "react";
import Svg, { Path } from "react-native-svg";

function NotificationSettingsIcon(props: any) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.616 7.154a3.077 3.077 0 100-6.154 3.077 3.077 0 000 6.154zM12.61 10.23v1.889c0 .48.19.943.532 1.282.34.341.915.532 1.397.532H1c.481 0 1.057-.19 1.397-.532a1.81 1.81 0 00.532-1.282V7.687a4.84 4.84 0 014.84-4.84M6.54 17H9"
        stroke="#0085FF"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default NotificationSettingsIcon;
