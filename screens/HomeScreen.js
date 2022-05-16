import React from "react";
import { View, Text} from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 30, color: "black", alignSelf: "center" }}>
          Home Screen
        </Text>
      </View>
    </View>
  );
}