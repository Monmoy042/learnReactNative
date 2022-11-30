import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const Images = () => {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.textStyle}>This is Images File</Text>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/test1.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    height: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
  },
  imageStyle: {
    height: 200,
    width: 200,
  },
});

export default Images;
