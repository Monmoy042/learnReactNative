import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxModel = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Box Model</Text>
      <View style={styles.mainSection}>
        <View style={styles.box1}>
          <Text>Box-1</Text>
        </View>
        <View style={styles.box2}>
          <Text>Box-2</Text>
        </View>
        <View style={styles.box3}>
          <Text>Box-3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    fontSize: 30,
  },
  mainSection: {
    border: "1px solid #000",
  },
  box1: {
    backgroundColor: "salmon",
    padding: 30,
    margin: 10,
    border: "2px solid green",
    borderRadius: 15,
  },
  box2: {
    backgroundColor: "skyblue",
    padding: 30,
    margin: 10,
    border: "2px solid green",
    borderRadius: 15,
  },
  box3: {
    backgroundColor: "goldenrod",
    padding: 30,
    margin: 10,
    border: "2px solid green",
    borderRadius: 15,
  },
});

export default BoxModel;
