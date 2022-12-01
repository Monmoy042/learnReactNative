import React from "react";
import { createRoot } from "react-dom/client";
import { Text, StyleSheet, View } from "react-native";
import ExtFont from "./src/components/ExtFont";

const App = () => {
  return (
    <View>
      <ExtFont />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    marginTop: 100,
  },
});
export default App;
