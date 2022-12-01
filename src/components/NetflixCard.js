import React from "react";
import { View, StyleSheet, Text, Image, Button, Linking } from "react-native";

const NetflixCard = () => {
  const {
    container,
    imgStyle,
    titleStyle,
    posterInfo,
    posterTitle,
    posterText,
    btnStyle,
  } = styles;
  return (
    <View style={container}>
      <Text style={titleStyle}>Netflix Card</Text>
      <View>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png",
          }}
          style={imgStyle}
        />
      </View>
      <View style={posterInfo}>
        <Text style={posterTitle}>Stranger Things</Text>
        <Text style={posterText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui aliquid
          odio est corrupti rem fuga, dolorum quisquam fugiat distinctio at.
        </Text>
      </View>
      <Button
        title="Watch Now"
        onPress={() => {
          Linking.openURL("https://kasttech.com/index.php");
        }}
        style={btnStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 30,
    alignItems: "center",
    border: "2px solid red",
  },
  titleStyle: {
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
  },
  imgStyle: {
    // width: 300,
    // height: 200,
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 10,
  },
  posterInfo: {
    alignItems: "center",
    marginVertical: 10,
  },
  posterTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  posterText: {
    color: "#999",
    paddingHorizontal: 20,
    marginBottom: 10,
    textAlign: "justify",
  },
  btnStyle: {
    borderWidth: 0,
    borderRadius: 20,
  },
});

export default NetflixCard;
