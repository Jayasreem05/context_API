import React from "react";
import { Text, View } from "react-native";
import MainScreen from "./mainscreen/src";
import CountContextProvider from "./mainscreen/context/context";

export default function App() {
  return (
    <CountContextProvider>
      <MainScreen />
    </CountContextProvider>

  );
}
