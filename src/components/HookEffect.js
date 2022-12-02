import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";

const HookEffect = () => {
  const [userData, setUserData] = useState();
  const [isLoaded, setIsLoaded] = useState(true);
  // user data function
  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const data = await response.json();
      setUserData(data);
      setIsLoaded(false);
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // Fetch Rest API Data using useEffect hook
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <View>
      {isLoaded ? (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          <FlatList
            keyExtractor={(key) => {
              key;
            }}
            data={userData}
            renderItem={({ item }) => {
              return (
                <View>
                  <Image
                    style={styles.imgStyle}
                    resizeMode="cover"
                    source={{ uri: item.image }}
                  />
                  <View>
                    <Text>Bio Data</Text>
                    <Text>{item.id < 10 ? `#0${item.id}` : `#${item.id}`}</Text>
                  </View>
                  <View>
                    <Text>{item.name}</Text>
                    <Text>{item.email}</Text>
                    <Text>{item.phone}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: 100,
    height: 100,
  },
});

export default HookEffect;
