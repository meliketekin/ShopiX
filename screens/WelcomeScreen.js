import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/d.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ backgroundColor: "rgba(0,0,0,0.1)", flex: 1 }}>
          <Text style={styles.startText}>Get Started!</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.signInButton}
             onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate("SignUpScreen")}>
              <Text style={styles.text}>Create an account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  startText: {
    color: "black",
    fontSize: 40,
    alignSelf: "center",
    marginTop: "10%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  },
  signUpButton: {
    marginHorizontal: 20,
    borderRadius: 10,

    borderColor: "black",
    backgroundColor: "#fea59f",
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },
  signInButton: {
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
    borderColor: "black",
    backgroundColor: "#99e0e6",
    borderWidth: 2,
    marginBottom: "3%",
  },
  text: {
    color: "black",
    fontSize: 20,

    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
  },
  buttonContainer: {
    marginTop: "10%",
  },
});
