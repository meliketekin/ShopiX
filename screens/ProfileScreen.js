import React from "react";
import { View, Text} from "react-native";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 30, color: "black", alignSelf: "center" }}>
          Profile Screen
        </Text>
        <Button onPress={()=>auth.signOut().then(()=>dispatch(logout()))} title='logout'></Button>
      </View>
    </View>
  );
}