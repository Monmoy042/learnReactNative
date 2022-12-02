import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const netflixSeries = [
  {
    name: "Archive 81",
    year: 2022,
    creator: "Rebecca Sonnenshine",
    genre: "Horror, thriller",
  },
  {
    name: "Cheer",
    year: "2021-2022",
    creator: "Greg whiteley",
    genre: "Docuseries",
  },
  {
    name: "Cobra Kai",
    year: "2018-2022",
    creator: "Hayden Schlossberg",
    genre: "Drama",
  },
  {
    name: "The Witcher",
    year: "2020-2021",
    creator: "Lauren Schmit Hissrich",
    genre: "Reality",
  },
  {
    name: "Death Note",
    year: 2021,
    creator: "unknown",
    genre: "Horror, thriller",
  },
];

const NetflixScrolling = () => {
  return (
    <View>
      <FlatList
        style={styles.listStyle}
        keyExtractor={(key) => {
          return key.name;
        }}
        data={netflixSeries}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle}>{item.name}</Text>
              <Text style={styles.textStyle}>{item.year}</Text>
              <Text style={styles.textStyle}>{item.creator}</Text>
              <Text style={styles.textStyle}>{item.genre}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    textAlign: "center",
    padding: 5,
    margin: 20,
  },
  textStyle: {
    color: "white",

    fontSize: 30,
    backgroundColor: "#009688",
  },
  viewStyle: {
    padding: 5,
    margin: 20,
  },
});

export default NetflixScrolling;
