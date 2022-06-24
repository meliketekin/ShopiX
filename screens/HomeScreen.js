import React from "react";
import { View, Text, Button} from "react-native";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
export default function HomeScreen() {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 30, color: "black", alignSelf: "center" }}>
          Home Screen
        </Text>
        <Button onPress={()=>auth.signOut().then(()=>dispatch(logout()))} title='logout'></Button>
      </View>
    </View>
  );
}