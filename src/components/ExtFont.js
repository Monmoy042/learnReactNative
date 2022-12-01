import React from "react";
import { View, StyleSheet, Text } from "react-native";

// Fonts
import {
  Roboto_300Light,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const ExtFont = () => {
  let [fontsLoad] = useFonts({
    Roboto_300Light,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoad) {
    return <AppLoading />;
  }
  return (
    <View>
      <Text style={styles.textStyle}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Roboto_700Bold",
    fontSize: 30,
    margin: 30,
  },
});

export default ExtFont;
