import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const Home = ({ route, navigation }) => {
  const { myName } = route.params;
  return (
    <View>
      <Text>Home Page</Text>
      <Text>Welcome, {myName}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      {/* <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        temporibus, sequi, accusantium voluptatum tempora facere a quasi
        perferendis delectus unde nobis distinctio laudantium eligendi ea eos?
        Rerum inventore natus blanditiis!
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
