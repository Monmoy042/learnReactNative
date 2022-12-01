import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const CardDetail = (props) => {
  const { textData, imgSrc } = props;
  const { listStyle, textStyle, imageStyle } = styles;
  return (
    <View style={listStyle}>
      <Text style={textStyle}>{textData}</Text>
      <Image style={imageStyle} source={imgSrc} />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    height: 200,
    width: 200,
  },
  textStyle: {
    fontSize: 30,
  },
});

export default CardDetail;
