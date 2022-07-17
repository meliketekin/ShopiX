import React from "react";
import { View, Text, Button} from "react-native";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";
import { useDispatch} from "react-redux";

export default function ProfileScreen() {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 30, color: "black", alignSelf: "center" }}>
          Profile Screen
        </Text>
        <Button onPress={()=>auth.signOut().then(dispatch(logout()))} title='logout'></Button>
      </View>
    </View>
  );
}