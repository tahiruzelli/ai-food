import React, { createContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import HomeScreen from "../../../../app/home";
import CreateReceipeScreen from "../../../../app/create-receipe";
import ProfileScreen from "../../../../app/profile";
import BottomNavigationBar from "../../molecules/Core/bottom-navigation-bar";
import dimensions from "../../../utils/helpers/dimensions";

export const HomeContext = createContext({
  setIndex1: () => {},
  setIndex2: () => {},
  setIndex3: () => {},
});

export default function Home({}) {
  const [index, setIndex] = useState(0);

  function onHomePressed() {
    setIndex(0);
  }
  function onCreateReceipePressed() {
    setIndex(1);
  }
  function onProfilePressed() {
    setIndex(2);
  }
  const PageList = [
    () => HomeScreen(),
    () => CreateReceipeScreen(),
    () => ProfileScreen(),
  ];
  const SelectedComponent = PageList[index];

  return (
    <HomeContext.Provider
      value={{
        setIndex1: onHomePressed,
        setIndex2: onCreateReceipePressed,
        setIndex3: onProfilePressed,
      }}
    >
      <View style={styles.mainStyle}>
        <SelectedComponent />
        <BottomNavigationBar
          index={index}
          onTap={setIndex}
        ></BottomNavigationBar>
      </View>
    </HomeContext.Provider>
  );
}

const styles = StyleSheet.create({
  mainStyle: {
    height: dimensions().height,
  },
});
