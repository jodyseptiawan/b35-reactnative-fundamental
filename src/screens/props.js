import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image } from "react-native";

import List from "../components/list";

export default function Props() {
  // Create variable to insert link Image
  let pic = {
    uri: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png'
  }

  return (
    <View>
      <StatusBar />

      <Image 
        source={pic}
        style={{width: '100%', height: 200}}
      />

      <List title="BMW" />
      <List title="Mercedes-Benz" />
      <List title="Ducati" />
    </View>
  );
}
