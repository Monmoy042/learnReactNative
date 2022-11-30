import React from "react";
import { createRoot } from "react-dom/client";
import { Text, StyleSheet, View } from "react-native";
import Custom from "./src/screens/Custom";
import Challenge from "./src/screens/Challenge";
import List from "./src/screens/List";
import Images from "./src/screens/Images";
import Btn from "./src/screens/Btn";

const App = () => {
  return (
    <View>
      <Btn />
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
