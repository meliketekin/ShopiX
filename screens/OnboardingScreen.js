import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { useFonts } from "expo-font";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const slides = [
  {
    key: 1,
    title: "Easy Shopping",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
    image: require("../assets/onboard1.png"),
  },
  {
    key: 2,
    title: "Secure Payment",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
    image: require("../assets/onboard2.png"),
  },
  {
    key: 3,
    title: "Quick Delivery",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
    image: require("../assets/onboard3.png"),
  },
];

export default function OnboardingScreen({ navigation }) {
  const [loaded] = useFonts({
    Satisfy: require("../assets/fonts/Satisfy-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
        <Text style={styles.description}>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      showSkipButton={true}
      onDone={() => {
        navigation.replace("WelcomeScreen");
      }}
      onSkip={() => {
        navigation.replace("WelcomeScreen");
      }}
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    height: height / 2,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#db6d8e",
  },
  title: {
    marginTop: -20,
    fontSize: 40,
    color: "white",
    fontFamily: "Satisfy",
  },
  image: {
    marginTop: -100,
    width: width,
    height: height / 2,
  },
  description: {
    marginTop: -100,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 20,
  },
});
