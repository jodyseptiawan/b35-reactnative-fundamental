import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

export default function EmbedExpression() {
  // Create Function Here
  function getMajor() {
    return "Full-Stack"
  }

  // Create a variable Here
  const companyName = 'Dumbways Indonesia'

  return (
    <View>
      <StatusBar />
      Welcome To {companyName} Class {getMajor()}
    </View>
  );
}
