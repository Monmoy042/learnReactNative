import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";

const RandomColor = () => {
  // Generate RGB value
  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };

  const [newColor, setNewColor] = useState([]);

  console.log(newColor);

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          //   randomColor();
          setNewColor([...newColor, randomColor()]);
        }}
      >
        <Text style={styles.textStyle}>Generate Random Color</Text>
      </TouchableOpacity>

      <FlatList
        keyExtractor={(key) => {
          key;
        }}
        data={newColor}
        renderItem={({ item }) => {
          return (
            <View style={styles.imageContainer}>
              <Text
                style={{
                  backgroundColor: item,
                  width: 200,
                  height: 100,
                  borderRadius: 5,
                }}
              >
                {item}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
  },
  buttonStyle: {
    backgroundColor: "#00b0ff",
    position: "relative",
    overflow: "hidden",
    color: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
  },
  textStyle: {
    color: "#fff",
    textTransform: "uppercase",
  },
  imageContainer: {
    marginVertical: 10,
    paddingHorizontal: 30,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
});

export default RandomColor;
