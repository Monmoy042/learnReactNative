import React from "react";
import { Text, StyleSheet } from "react-native";

const Custom = () => {
  return (
    <>
      <Text style={styles.textStyle}>Hello From Custom Components</Text>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
  },
});
export default Custom;
