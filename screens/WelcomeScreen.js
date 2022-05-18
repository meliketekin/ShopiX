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
        source={require("../assets/f.jpg")}
        resizeMode="cover"
        style={StyleSheet.absoluteFillObject}
      >
        <View style={{ backgroundColor: "rgba(0,0,0,0.1)", flex: 1 }}>
          <Text style={styles.startText}>Get Started!</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.signInButton}
             onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={styles.signInText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate("SignUpScreen")}>
              <Text style={styles.signUpText}>Create an account</Text>
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
  
  startText: {
    color: "white",
    fontSize: 40,
    alignSelf: "center",
    marginTop: "15%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  },
  signUpButton: {
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor:"#db6d8e",
    
    backgroundColor: "white",
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
    backgroundColor: "#db6d8e",
    borderWidth: 2,
    borderColor:"white",
    marginBottom: "3%",
  },
  signUpText: {
    color: "#db6d8e",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
  },
  signInText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
  },
  buttonContainer: {
    marginTop: "10%",
  },
});
