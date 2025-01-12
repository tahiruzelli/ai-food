import * as React from "react";
import Svg, { Path } from "react-native-svg";

function NotificationIcon(props: any) {
  return (
    <Svg
      width={props.width ?? 49}
      height={props.height ?? 48}
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M37.998 19.42v-1.41C37.998 10.272 31.955 4 24.5 4c-7.455 0-13.498 6.273-13.498 14.01v1.41a8.8 8.8 0 01-1.386 4.75L7.4 27.62c-2.023 3.149-.479 7.43 3.04 8.426a51.551 51.551 0 0028.118 0c3.519-.996 5.063-5.277 3.04-8.427l-2.215-3.448a8.8 8.8 0 01-1.386-4.752z"
        stroke={props.color ?? "#0F5FBD"}
        strokeWidth={1.5}
      />
      <Path
        opacity={0.5}
        d="M15.5 38c1.31 3.496 4.845 6 9 6s7.69-2.504 9-6"
        stroke={props.color ?? "#0F5FBD"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default NotificationIcon;
