import React from "react";
import { createRoot } from "react-dom/client";
import { Text, StyleSheet, View } from "react-native";
import NetflixCard from "./src/components/NetflixCard";

const App = () => {
  return (
    <View>
      <NetflixCard />
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
