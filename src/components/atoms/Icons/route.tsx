import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export default function RouteIcon(props: any) {
  return (
    <Svg
      width={props.width ?? 17}
      height={props.height ?? 16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={3.83301}
        cy={3.3335}
        r={2}
        stroke={props.color ?? "#E08404"}
        strokeWidth={1.2}
      />
      <Circle
        cx={13.167}
        cy={12.6665}
        r={2}
        stroke={props.color ?? "#E08404"}
        strokeWidth={1.2}
      />
      <Path
        opacity={0.5}
        d="M7.834 2.733a.6.6 0 000 1.2v-1.2zm1.333 9.934l.424.424a.6.6 0 000-.848l-.424.424zm2.804-6.875l.322.506-.322-.506zm-6.94 4.417l.321.506-.322-.506zm3.56 1.034a.6.6 0 00-.848.848l.848-.848zm-.848 2a.6.6 0 10.848.848l-.848-.848zm3.512-10.51H7.834v1.2h3.421v-1.2zm-2.088 9.334H5.746v1.2h3.421v-1.2zm2.482-6.781L4.708 9.702l.644 1.013 6.941-4.417-.644-1.012zM9.59 12.243l-1-1-.848.848 1 1 .848-.848zm-.848 0l-1 1 .848.848 1-1-.848-.848zm-2.997-.176c-.734 0-1.013-.958-.394-1.352l-.644-1.013c-1.632 1.039-.896 3.565 1.038 3.565v-1.2zm5.51-8.133c.733 0 1.012.958.393 1.352l.644 1.012c1.632-1.039.896-3.565-1.038-3.565v1.2z"
        fill={props.color ?? "#E08404"}
      />
    </Svg>
  );
}
