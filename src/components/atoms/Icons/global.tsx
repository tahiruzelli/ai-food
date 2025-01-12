import * as React from "react";
import Svg, { Path } from "react-native-svg";

function GlobalIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.5}
        d="M2 12h20m-6 0c0 1.313-.104 2.614-.305 3.827-.2 1.213-.495 2.315-.867 3.244-.371.929-.812 1.665-1.297 2.168-.486.502-1.006.761-1.531.761-.525 0-1.045-.259-1.53-.761-.486-.503-.927-1.24-1.298-2.168-.372-.929-.667-2.03-.868-3.244A23.614 23.614 0 018 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2c.525 0 1.045.259 1.53.761.486.503.927 1.24 1.298 2.168.372.929.667 2.03.867 3.244C15.896 9.386 16 10.687 16 12z"
        stroke="#0F5FBD"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M22 12a10 10 0 11-20.001 0A10 10 0 0122 12h0z"
        stroke="#0F5FBD"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default GlobalIcon;
