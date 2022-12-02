import React from "react";
import { createRoot } from "react-dom/client";
import { Text, StyleSheet, View } from "react-native";
import Flex from "./src/components/Flex";

const App = () => {
  return (
    <View style={styles.container}>
      <Flex />
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
