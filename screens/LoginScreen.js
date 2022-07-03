import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as yup from "yup";
import { Formik } from "formik";
import { auth, firestore } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";



const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email!")
    .required("Email address is required."),
  password: yup.string().required("Password is required."),
});

export default function LoginScreen({ navigation}) {
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();
  const handleLogin = ({ email, password }) => {
    // Sign in an existing user with Firebase
    auth
      .signInWithEmailAndPassword(email, password)

      .then((auth) => {
        if (auth) {
          firestore
            .collection("users")
            .doc(auth.user.uid)
            .get()
            .then((doc) => {
              if (doc.exists) {
                dispatch(login(doc.data()));
                alert("succesfull")
                navigation.navigate("AuthLoading");
              } else {
                alert("User does not exist");
              }
            });
        }
        // store the user's information in the redux state
      })
      // display the error if any
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnMount={true}
      validationSchema={loginValidationSchema}
      onSubmit={handleLogin}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
      }) => (
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "#ffffff",
          }}
        >
          <View style={{ height: "40%", flexDirection: "row" }}>
            <TouchableOpacity
              style={{ marginLeft: 10, marginTop: "4%" }}
              onPress={() => {
                navigation.navigate("Welcome");
              }}
            >
              <Ionicons name="chevron-back" size={50} color="#fe7979" />
            </TouchableOpacity>
            <Image
              source={require("../assets/login.png")}
              resizeMode="contain"
              style={{
                backgroundColor: "#ffffff",
                height: "89%",
                width: "60%",
                marginLeft: "2%",
                marginTop: "8%",
              }}
            />
          </View>
          <View style={styles.loginContainer}>
            <View
              style={{
                marginTop: "10%",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.4,
                shadowRadius: 2,
                elevation: 2,
                borderRadius: 10,
              }}
            >
              <View style={{ marginBottom: "7%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    backgroundColor: "#feeeee",
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
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />

                  <Ionicons
                    color={!errors.email ? "green" : "red"}
                    name={!errors.email ? "checkmark-sharp" : "close"}
                    size={25}
                    style={{ alignSelf: "center", marginRight: 10 }}
                  />
                </View>
                {errors.email && touched.email && (
                  <Text style={styles.errors}>{errors.email}</Text>
                )}
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
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={showPassword} //password dots
                />
                <TouchableOpacity
                  style={{ alignSelf: "center", marginRight: 10 }}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    color={"#fe9393"}
                    name={showPassword ? "eye" : "eye-off"}
                    size={25}
                  />
                </TouchableOpacity>
              </View>
              {errors.password && touched.password && (
                <Text style={styles.errors}>{errors.password}</Text>
              )}
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              rounded
              disabled={!isValid}
              style={[
                styles.loginButton,
                { backgroundColor: isValid ? "#fe9393" : "#feb8b8" },
              ]}
              onPress={handleSubmit}
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
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SignUpScreen");
                }}
              >
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
      )}
    </Formik>
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
  errors: {
    color: "red",
    fontSize: 12,
    marginTop: "2%",
  },
});
