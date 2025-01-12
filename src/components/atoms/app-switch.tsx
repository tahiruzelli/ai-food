import { useEffect, useState } from "react";
import SwitchToggle from "react-native-switch-toggle";
import { Colors } from "../../utils/constans/colors";
export default function AppSwitch(props: any) {
  const [on, setOn] = useState(props.currentValue);

  useEffect(() => {
    setOn(props.currentValue);
  }, [props.currentValue]);
  return (
    <SwitchToggle
      switchOn={on}
      onPress={() => {
        setOn(!on);
        props.onChanged(!on);
      }}
      circleColorOff={Colors.blackSecondary}
      circleColorOn={Colors.success}
      backgroundColorOn={Colors.successSecondary}
      backgroundColorOff={Colors.surface100}
      containerStyle={{
        width: 45,
        height: 26,
        padding: 5,
        borderRadius: 20,
      }}
      circleStyle={{
        width: 18,
        height: 18,
        borderRadius: 100,
      }}
    />
  );
}
