import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import BottomTabs from "./BottomTabNavigation";
import AuthLoading from "../screens/AuthLoading";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="AuthLoading">
      <Stack.Screen
        name="AuthLoading"
        component={AuthLoading}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </Stack.Navigator>
  );
}
