import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contact from "./src/components/Contact";
import CounterApp from "./src/components/CounterApp";
import Flex from "./src/components/Flex";
import HookEffect from "./src/components/HookEffect";
import RandomColor from "./src/components/RandomColor";
import Home from "./src/components/Home";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Contact} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      {/* <View style={styles.container}>
        <Contact />
      </View> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    marginTop: 100,
  },
  container: {
    marginTop: 30,
  },
});
export default App;
