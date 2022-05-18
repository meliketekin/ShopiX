import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  FontAwesome,
  Ionicons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import * as yup from "yup";
import { Formik } from "formik";

const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, ({ min }) => "Name must be at least ${min} characters")
    .required("Name is required."),

  email: yup
    .string()
    .required("Password is required.")
    .email("Please enter valid email!")
    .required("Email address is required."),
  password: yup
    .string()
    .min(6, ({ min }) => "Password must be at least ${min} characters")
    .required("Password is required.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Password must contain at least one uppercase, one lowercase, one number and one special case character"
    ),
  passwordAgain: yup
    .string()
    .required("Confirm your password")
    .equals([yup.ref("password"), null], "Password does not match!"),
});

export default function SignUpScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordAgain, setShowPasswordAgain] = useState(true);
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", passwordAgain: "" }}
      validateOnMount={true}
      validationSchema={registerValidationSchema}
      onSubmit={(values) => alert(JSON.stringify(values))}
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
        /* and other goodies */
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
              source={require("../assets/sign-in.png")}
              resizeMode="contain"
              style={{
                backgroundColor: "#ffffff",
                height: "89%",
                width: "60%",
                marginLeft: "2%",
                marginTop: "4%",
              }}
            />
          </View>
          <View style={styles.registerContainer}>
            <View
              style={{
                marginTop: "-6%",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.4,
                shadowRadius: 2,
                elevation: 2,
                borderRadius: 10,
              }}
            >
              <View style={{ marginBottom: "3%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    backgroundColor: "#feeeee",
                  }}
                >
                  <Feather
                    name="user"
                    size={25}
                    style={{
                      marginLeft: 10,
                      alignSelf: "center",
                      paddingVertical: 8,
                    }}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                  />
                </View>
                {errors.name && touched.name && (
                  <Text style={styles.errors}>{errors.name}</Text>
                )}
              </View>
              <View style={{ marginBottom: "3%" }}>
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
                      paddingVertical: 8,
                    }}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                </View>
                {errors.email && touched.email && (
                  <Text style={styles.errors}>{errors.email}</Text>
                )}
              </View>
              <View style={{ marginBottom: "3%" }}>
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
                      paddingVertical: 8,
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
              <View style={{ marginBottom: "3%" }}>
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
                      paddingVertical: 8,
                    }}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Password again"
                    onChangeText={handleChange("passwordAgain")}
                    onBlur={handleBlur("passwordAgain")}
                    value={values.passwordAgain}
                    secureTextEntry={showPasswordAgain} //password dots
                  />
                  <TouchableOpacity
                    style={{ alignSelf: "center", marginRight: 10 }}
                    onPress={() => setShowPasswordAgain(!showPasswordAgain)}
                  >
                    <Ionicons
                      color={"#fe9393"}
                      name={showPasswordAgain ? "eye" : "eye-off"}
                      size={25}
                    />
                  </TouchableOpacity>
                </View>
                {errors.passwordAgain && touched.passwordAgain && (
                  <Text style={styles.errors}>{errors.passwordAgain}</Text>
                )}
              </View>
            </View>

            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => navigation.navigate("BottomTabs")}
            >
              <Text style={styles.registerButtonText}>REGISTER</Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ fontSize: 15 }}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("LoginScreen");
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
                  LOGIN
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
  registerContainer: {
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
  registerButton: {
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
  registerButtonText: {
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
