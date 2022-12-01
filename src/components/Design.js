import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Design = () => {
  return (
    <View>
      <Text style={styles.textColor}>Hello World</Text>
      <Text style={styles.textStyle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nostrum
        voluptatem itaque velit, est laboriosam nulla dicta excepturi mollitia
        sint.
      </Text>

      <View style={styles.mainBox}>
        <View style={[styles.box1, styles.boxCommon]}>
          <Text>Hello 1</Text>
        </View>
        <View style={[styles.box2, styles.boxCommon]}>
          <Text>Hello 2</Text>
        </View>
        <View style={[styles.box3, styles.boxCommon]}>
          <Text>Hello 3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textColor: {
    color: "yellow",
    marginTop: 20,
    fontSize: 30,
    backgroundColor: "#000",
    textAlign: "center",
    fontStyle: "italic",
    // fontWeight: 200,
    // fontWeight: "bold",
    fontVariant: ["small-caps"],
  },
  textStyle: {
    letterSpacing: 2,
    lineHeight: 25,
    // textAlign: "center",
    // textAlign: "right",
    // textAlign: "left",
    textAlign: "justify",
    textShadowOffset: { width: -1, height: 1 },
    textShadowColor: "skyblue",
    textTransform: "uppercase",
  },
  mainBox: {
    border: "2px solid green",
    margin: 15,
    paddingTop: 10,
  },
  box1: {
    backgroundColor: "salmon",
  },
  box2: {
    backgroundColor: "skyblue",
  },
  box3: {
    backgroundColor: "orange",
  },
  boxCommon: {
    borderColor: "#000",
    color: "#000",
    fontSize: 20,
    paddingVertical: 30,
    textAlign: "center",
    borderWidth: 5,
    marginBottom: 30,
    marginHorizontal: 50,
  },
});

export default Design;
