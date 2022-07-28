import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthNavigator";
import BottomTabNavigation from "./BottomTabNavigation";
import {createStackNavigator} from '@react-navigation/stack';
import {selectUser} from "../features/userSlice";
import { useSelector } from "react-redux";
export default function RootNavigator() {
  const loggedIn = useSelector(state=> state.user.user); 
  console.log(loggedIn)
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="BottomTabs" component={BottomTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}
