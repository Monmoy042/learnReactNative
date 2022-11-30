import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";

function List() {
  const names = [
    {
      id: " 1",
      name: "Monmoy",
    },
    {
      id: "2",
      name: "Avijit",
    },
    {
      id: "3",
      name: "Shanto",
    },
    {
      id: "4",
      name: "Rahi",
    },
    {
      id: "5",
      name: "Afridi",
    },
    {
      id: "6",
      name: "Shimul",
    },
    {
      id: "7",
      name: "Nabil",
    },
  ];
  return (
    <FlatList
      style={styles.listStyle}
      key={(key) => {
        return key.id;
      }}
      keyExtractor={(key) => {
        return key.id;
      }}
      horizontal
      inverted
      showsHorizontalScrollIndicator={false}
      // numColumns={2}
      data={names}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    padding: 30,
    backgroundColor: "salmon",
    margin: 20,
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
});

export default List;
