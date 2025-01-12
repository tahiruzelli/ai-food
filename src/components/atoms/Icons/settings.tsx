import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SettingsIcon(props: any) {
  return (
    <Svg
      width={17}
      height={19}
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.167 3.654l.529-1.366A1.23 1.23 0 017.84 1.5H8.85a1.23 1.23 0 011.144.788l.53 1.366 1.796 1.034 1.453-.222a1.23 1.23 0 011.23.603l.493.862a1.23 1.23 0 01-.098 1.39l-.899 1.145v2.068l.923 1.144a1.23 1.23 0 01.098 1.391l-.492.862a1.23 1.23 0 01-1.23.603l-1.453-.222-1.797 1.034-.529 1.366a1.23 1.23 0 01-1.145.788H7.841a1.23 1.23 0 01-1.145-.788l-.53-1.366-1.796-1.034-1.453.222a1.23 1.23 0 01-1.23-.603l-.493-.862a1.23 1.23 0 01.099-1.39l.898-1.145V8.466l-.923-1.144A1.23 1.23 0 011.17 5.93l.492-.862a1.23 1.23 0 011.23-.603l1.453.222 1.822-1.034zM5.884 9.5a2.462 2.462 0 104.923 0 2.462 2.462 0 00-4.923 0z"
        stroke="#0085FF"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SettingsIcon;
