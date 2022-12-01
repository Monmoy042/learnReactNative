import React from "react";
import { View, StyleSheet } from "react-native";
import CardDetail from "../components/CardDetail";

const Images = () => {
  return (
    <View>
      <CardDetail
        textData="This is my first img"
        imgSrc={require("../../assets/test1.jpg")}
      />
      <CardDetail
        textData="This is my second img"
        imgSrc={require("../../assets/test1.jpg")}
      />
      <CardDetail
        textData="This is my third img"
        imgSrc={require("../../assets/test1.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Images;
