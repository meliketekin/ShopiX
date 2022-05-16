import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#ffffff",
      }}
    >
      <View style={{ height: "40%", flexDirection: "row" }}>
        <TouchableOpacity style={{ marginLeft: 10, marginTop: "10%" }} onPress={() =>{
          navigation.navigate("Welcome")
        }}>
          <Ionicons
            name="chevron-back"
            size={50}
            color="#fe7979"
            
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/login.png")}
          resizeMode="contain"
          style={{
            backgroundColor: "#ffffff",
            height: "89%",
            width: "60%",
            marginLeft: "2%",
            marginTop: "10%",
          }}
        />
      </View>
      <View style={styles.loginContainer}>
        <View
          style={{
            marginTop: "20%",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 2,
            elevation: 2,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              backgroundColor: "#feeeee",
              marginBottom: "10%",
            }}
          >
            <MaterialIcons
              name="mail-outline"
              size={25}
              style={{
                marginLeft: 10,
                alignSelf: "center",
                paddingVertical: 10,
              }}
            />
            <TextInput style={styles.input} placeholder="Email" />
          </View>

          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              backgroundColor: "#feeeee",
            }}
          >
            <MaterialIcons
              name="lock-outline"
              size={25}
              style={{
                marginLeft: 10,
                alignSelf: "center",
                paddingVertical: 10,
              }}
            />
            <TextInput style={styles.input} placeholder="Password" />
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("BottomTabs")}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 15 }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate("SignUpScreen")
          }}>
            <Text
              style={{
                fontSize: 15,
                fontStyle: "italic",
                fontWeight: "bold",
                color: "#fe9393",
              }}
            >
              Register Now
            </Text>
          </TouchableOpacity>
        </View>
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
    height: "60%",
    backgroundColor: "#ffffff",
    width: "80%",
    alignSelf: "center",
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 15,
    fontSize: 15,
    alignSelf: "center",
  },
  loginButton: {
    backgroundColor: "#fe9393",
    borderRadius: 10,
    height: 50,

    justifyContent: "center",
    marginTop: 30,
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
  forgotPassword: {
    fontSize: 15,
    color: "#1a24b3",
    alignSelf: "flex-end",
    marginTop: 13,
    textDecorationLine: "underline",
  },
});
