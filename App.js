import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/d.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{backgroundColor:'rgba(0,0,0,0.2)', flex:1}}>
          <Text style={styles.startText}>Get Started!</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signInButton}>
              <Text style={styles.text}>Log In</Text>
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
    fontSize: 40,
    alignSelf: "center",
    marginTop: "10%",shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  },
  signUpButton: {
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: "3%",
    borderColor: "white",
    backgroundColor: "#fea59f",
    borderWidth: 2,
    
  },
  signInButton: {
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
    borderColor: "white",
    backgroundColor: "#99e0e6",
    borderWidth: 3,
  },
  text: {
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
