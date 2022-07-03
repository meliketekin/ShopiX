import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            size = focused ? 28 : 25;
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline";
            size = focused ? 28 : 25;
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
            size = focused ? 28 : 25;
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
            size = focused ? 28 : 25;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#db6d8e",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height:60,
          borderTopColor: "#db6d8e",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          marginBottom:5
        },
        
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
