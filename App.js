import React from "react";
import { createRoot } from "react-dom/client";
import { Text, StyleSheet, View } from "react-native";
import BoxModel from "./src/components/BoxModel";
import NetflixScrolling from "./src/components/NetflixScrolling";

const App = () => {
  return (
    <View style={styles.container}>
      <NetflixScrolling />
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
