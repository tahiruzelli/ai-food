import dimensions from "../../utils/helpers/dimensions";
import { createShimmerPlaceHolder } from "expo-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

export function ShimmerCard() {
  const ShimmerPlaceHolder = createShimmerPlaceHolder(LinearGradient);
  return (
    <ShimmerPlaceHolder
      visible={false}
      style={{
        backgroundColor: "transparent",
        height: dimensions().height * 0.075,
        borderRadius: 8,
        marginVertical: 16,
        width: dimensions().width - 32,
        overflow: "hidden",
      }}
    ></ShimmerPlaceHolder>
  );
}

export function ShimmerBigCard() {
  const ShimmerPlaceHolder = createShimmerPlaceHolder(LinearGradient);
  return (
    <ShimmerPlaceHolder
      visible={false}
      style={{
        backgroundColor: "transparent",
        height: dimensions().height * 0.3,
        borderRadius: 8,
        margin: 16,
        width: dimensions().width - 32,
        overflow: "hidden",
      }}
    ></ShimmerPlaceHolder>
  );
}
