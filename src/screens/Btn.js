import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

function Btn() {
  return (
    <View>
      <Text style={styles.textStyle}>Button</Text>
      <Button
        title="Click Me..!"
        onPress={() => {
          alert("Hello there");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 200,
    textAlign: "center",
    fontSize: 30,
  },
});

export default Btn;
