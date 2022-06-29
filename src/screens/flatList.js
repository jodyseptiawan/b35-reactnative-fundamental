import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, FlatList, Text } from "react-native";

export default function List() {
  // Make Dummy Data with Array
  const peoples = [
    {
      id: 1,
      name: 'Ilham'
    },
    {
      id: 2,
      name: 'Alvin'
    },
    {
      id: 3,
      name: 'Fadhil'
    }
  ]


  return (
    <View>
      <StatusBar />
      <FlatList 
        data={peoples}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
        refreshing={true} />
    </View>
  );
}
