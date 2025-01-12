import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ContactUsIcon(props: any) {
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
        d="M4.076 9V5.764A4.837 4.837 0 019 1a4.837 4.837 0 014.923 4.763V9"
        stroke="#0085FF"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.23 7.154h1.231a.615.615 0 01.616.616v3.692a.615.615 0 01-.616.615h-1.23A1.23 1.23 0 011 10.847V8.384a1.23 1.23 0 011.23-1.23zM15.768 12.077h-1.23a.615.615 0 01-.616-.615V7.77a.615.615 0 01.615-.616h1.23A1.23 1.23 0 0117 8.385v2.461a1.23 1.23 0 01-1.231 1.231z"
        stroke="#0085FF"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.46 15.461a2.462 2.462 0 002.462-2.46v-2.77"
        stroke="#0085FF"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.46 15.462A1.538 1.538 0 019.922 17H8.075a1.538 1.538 0 010-3.077h1.847a1.538 1.538 0 011.538 1.539z"
        stroke="#0085FF"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ContactUsIcon;
