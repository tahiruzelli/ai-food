import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export default function UploadIcon(props: any) {
  return (
    <Svg
      width={props.width ?? 20}
      height={props.height ?? 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#clip0_294_699)"
        stroke={props.color ?? "#0F5FBD"}
        strokeWidth={1.5}
      >
        <Path
          opacity={0.5}
          d="M1.666 10c0-3.929 0-5.893 1.22-7.113 1.22-1.22 3.185-1.22 7.113-1.22 3.929 0 5.893 0 7.113 1.22 1.22 1.22 1.22 3.184 1.22 7.113"
        />
        <Path d="M1.666 11.667c0-2.334 0-3.5.454-4.392a4.167 4.167 0 011.821-1.82C4.832 5 6 5 8.333 5h3.333c2.334 0 3.5 0 4.392.454a4.166 4.166 0 011.82 1.821c.455.891.455 2.058.455 4.392 0 2.333 0 3.5-.454 4.391a4.166 4.166 0 01-1.821 1.821c-.892.454-2.058.454-4.392.454H8.333c-2.334 0-3.5 0-4.392-.454a4.167 4.167 0 01-1.82-1.82c-.455-.892-.455-2.059-.455-4.392z" />
        <Path
          d="M10 14.166v-5m0 0l2.083 2.084M9.999 9.166L7.916 11.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_294_699">
          <Rect width={20} height={20} rx={5} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
