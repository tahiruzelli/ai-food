import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function WhatsappIcon(props: any) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        stroke="#03B901"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M10.997 1c-5.445.002-9.994 4.558-9.994 10 0 1.962.584 3.9 1.673 5.538L1 21l5.614-1.015a10.005 10.005 0 004.383 1.007C16.447 20.996 21 16.445 21 11 21 5.56 16.445.997 10.997 1z" />
        <Path d="M11.547 15.404c1.353.868 2.763.236 3.745-.497.678-.506.655-1.482.076-2.099l-1.142-1.216c-.434.433-1.278.648-1.865.47-1.26-.385-1.79-1.042-2.22-1.71-.492-.768.065-1.915.498-2.348L9.366 6.84c-.537-.49-1.353-.573-1.821-.017-.927 1.1-1.503 2.77-.82 3.834 1.225 1.909 2.914 3.52 4.822 4.746z" />
      </G>
    </Svg>
  );
}

export default WhatsappIcon;
