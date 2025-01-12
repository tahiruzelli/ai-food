import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Trash2Icon(props: any) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.5}
        d="M12.227 5.334a4.002 4.002 0 017.545 0"
        stroke={props.color ?? "#fff"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M27.334 8H4.667M25.11 11.333l-.612 9.199c-.236 3.54-.354 5.31-1.508 6.389C21.837 28 20.063 28 16.515 28h-1.03c-3.548 0-5.322 0-6.476-1.08-1.153-1.078-1.271-2.848-1.507-6.388l-.613-9.199"
        stroke={props.color ?? "#fff"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        opacity={0.5}
        d="M12.667 14.667l.667 6.667M19.334 14.667l-.667 6.667"
        stroke={props.color ?? "#fff"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default Trash2Icon;
