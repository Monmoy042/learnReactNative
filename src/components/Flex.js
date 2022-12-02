import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Flex = () => {
  return (
    <View style={styles.parentView}>
      <Text style={[styles.childText, styles.commonStyle]}>Box-1</Text>
      <Text style={[styles.childText2, styles.commonStyle]}>Box-2</Text>
      <Text style={[styles.childText3, styles.commonStyle]}>Box-3</Text>
      <Text style={[styles.childText4, styles.commonStyle]}>Box-4</Text>
      <Text style={[styles.childText5, styles.commonStyle]}>Box-5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    width: "95%",
    height: 500,
    marginTop: 100,
    marginHorizontal: 10,
    borderWidth: 3,
    backgroundColor: "aliceblue",
    borderColor: "#101820FF",
    // flexDirection: "row-reverse",
    // flexDirection:'row',
    // justifyContent: "center",
    // justifyContent: "space-between",
    // justifyContent: "space-around",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  childText: {
    backgroundColor: "skyblue",
  },
  childText2: {
    backgroundColor: "salmon",
  },
  childText3: {
    backgroundColor: "orange",
  },
  childText4: {
    backgroundColor: "purple",
  },
  childText5: {
    backgroundColor: "yellow",
  },
  commonStyle: {
    width: 200,
    height: 50,
    border: "1px solid #000",
    padding: 5,
  },
});

export default Flex;
