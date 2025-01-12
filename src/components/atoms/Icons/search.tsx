import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SearchIcon(props: any) {
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
        d="M11.179 21.025a9.846 9.846 0 100-19.692 9.846 9.846 0 000 19.692zM18.137 18.137l4.529 4.53"
        stroke="#fff"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.434 11.816c-.477-.084-.477-.78 0-.864A4.285 4.285 0 009.674 9.8a4.406 4.406 0 001.23-2.229l.028-.133a.45.45 0 01.88-.004l.036.156c.19.847.622 1.618 1.242 2.216.62.598 1.4.996 2.242 1.145.48.085.48.783 0 .869a4.306 4.306 0 00-2.241 1.145 4.426 4.426 0 00-1.242 2.216l-.035.155c-.107.478-.777.474-.88-.004l-.029-.132a4.405 4.405 0 00-1.229-2.23 4.284 4.284 0 00-2.242-1.153z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SearchIcon;
