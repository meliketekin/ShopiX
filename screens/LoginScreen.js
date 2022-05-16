import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Ionicons
          name="chevron-back"
          size={50}
          color="black"
          style={{ marginLeft: 10 }}
        />
        <FontAwesome
          name="user"
          size={120}
          color="#fe695f"
          style={{ alignSelf: "center" }}
        />
      </View>
      <View style={styles.loginContainer}>
        <View style={{ marginTop: "20%" }}>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("BottomTabs")}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginText: {
    fontSize: 30,
    color: "black",
    alignSelf: "center",
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  loginContainer: {
    flex: 2.5,
    backgroundColor: "#fea59f",
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  input: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 30,
    marginHorizontal: 20,
    height: 60,
    backgroundColor: "#fed5d3",
    paddingLeft: 20,
    fontSize: 15,
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: "#fe695f",
    borderRadius: 30,
    height: 60,
    marginHorizontal: 20,
    justifyContent: "center",
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },
  loginButtonText: {
    alignSelf: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
