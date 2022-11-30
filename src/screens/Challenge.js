import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Challenge = () => {
  const myName = "Monmoy";
  return (
    <View>
      <Text style={styles.textStyleOne}>Welcome to Bangladesh</Text>
      <Text style={styles.textStyleTwo}>Hello From Dhaka</Text>
      <Text style={styles.textStyleTwo}>Hi my name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleOne: {
    fontSize: 40,
    color: "red",
    fontWeight: "bold",
  },
  textStyleTwo: {
    fontSize: 30,
  },
});

export default Challenge;
