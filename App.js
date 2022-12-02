import React from "react";
import { createRoot } from "react-dom/client";
import { Text, StyleSheet, View } from "react-native";
import CounterApp from "./src/components/CounterApp";
import Flex from "./src/components/Flex";
import HookEffect from "./src/components/HookEffect";
import RandomColor from "./src/components/RandomColor";

const App = () => {
  return (
    <View style={styles.container}>
      <HookEffect />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    marginTop: 100,
  },
  container: {
    marginTop: 30,
  },
});
export default App;
