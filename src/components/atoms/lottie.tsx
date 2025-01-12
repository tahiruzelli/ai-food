import LottieView from "lottie-react-native";
import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import dimensions from "../../utils/helpers/dimensions";

interface AnimationProps {
  animation: any;
  duration?: number;
  height?: number;
  width?: number;
}

const AppAnimation: React.FC<AnimationProps> = ({
  animation,
  duration,
  height,
  width,
}) => {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    // animationRef.current?.play();
    // // Or set a specific startFrame and endFrame with:
    // animationRef.current?.play(30, 120);
  }, []);

  return (
    <LottieView
      autoPlay
      ref={animationRef}
      source={animation}
      style={{
        width: width ?? dimensions().width * 0.4,
        height: height ?? dimensions().width * 0.4,
      }}
    ></LottieView>
  );
};

export default AppAnimation;
