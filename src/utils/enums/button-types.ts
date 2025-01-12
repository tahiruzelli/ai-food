import { Colors } from "../constans/colors";

export enum ButtonTypes {
  primary,
  deactive,
  navy,
  outlined,
  clear,
  hover,
}

interface ButtonTypeProps {
  backgroundColor: string;
  textColor: string;
  borderColor?: string;
}

export const buttonProperties: Record<ButtonTypes, ButtonTypeProps> = {
  [ButtonTypes.primary]: {
    backgroundColor: Colors.primary,
    textColor: "white",
  },
  [ButtonTypes.navy]: { backgroundColor: Colors.navy, textColor: "white" },
  [ButtonTypes.deactive]: {
    backgroundColor: Colors.default,
    textColor: "white",
  },
  [ButtonTypes.outlined]: {
    backgroundColor: "transparent",
    textColor: Colors.blackSecondary,
    borderColor: Colors.lineColor,
  },
  [ButtonTypes.clear]: {
    backgroundColor: Colors.blueSecondary,
    textColor: Colors.navy,
  },
  [ButtonTypes.hover]: {
    backgroundColor: Colors.hover,
    textColor: Colors.white,
  },
};
