import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

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
      <TouchableOpacity
        onPress={() => {
          console.log("Pressed..!!!");
        }}
      >
        <Image
          style={styles.imageStyle}
          source={require("../../assets/test1.jpg")}
        />
        <Text style={styles.textStyle}>Join Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 30,
  },
  imageStyle: {
    height: 200,
    width: 200,
    display: "block",
    margin: "auto",
  },
});

export default Btn;
