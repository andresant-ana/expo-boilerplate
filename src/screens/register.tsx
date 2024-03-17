import Ionicons from "@expo/vector-icons/AntDesign"
import Feather from "@expo/vector-icons/Feather"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import { RootStackParamList } from "../navigation"
import { Divider } from "react-native-paper"

type RegisterScreenNavigationProps = StackNavigationProp<RootStackParamList, "Register">

export default function Register() {
  const navigation = useNavigation<RegisterScreenNavigationProps>()

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View>
          <Text style={styles.title}>Sign Up</Text>
        </View>
        <View style={styles.containerInput}>
          <Ionicons name="mail" size={32} color={"#ADB0CD"} />
          <TextInput placeholder="Your email" maxLength={37} />
        </View>
        <View style={styles.containerInput}>
          <Feather name="key" size={32} color={"#ADB0CD"} />
          <TextInput secureTextEntry={true} placeholder="Password" maxLength={30} />
        </View>
        <View style={styles.containerInput}>
          <Feather name="key" size={32} color={"#ADB0CD"} />
          <TextInput secureTextEntry={true} placeholder="Repeat password" maxLength={30} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.orLine}>
          <Divider style={styles.horizontalLine} />
          <Text style={styles.orText}>or</Text>
          <Divider style={styles.horizontalLine} />
        </View>
        <View style={styles.social}>
          <TouchableOpacity style={styles.buttonSocial}>
            <Image source={require("../../assets/google.png")} style={styles.socialImage} />
            <Text style={styles.textSocial}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSocial}>
            <Image source={require("../../assets/facebook.png")} style={styles.socialImage} />
            <Text style={styles.textSocial}>Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUp}>
          <Text style={styles.textSignUp}>Already have an account?</Text>
          <TouchableOpacity style={styles.buttonSignUp} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.buttonForgot}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#0062FF",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    height: 55,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FFF",
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: "auto",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 30,
  },
  subtitle: {
    color: "#38434D",
    fontSize: 36,
  },
  containerInput: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    gap: 8,
    marginBottom: 20,
    borderColor: "#ADB0CD",
  },
  buttonForgot: {
    color: "#0062ff",
    fontSize: 16,
    fontWeight: "600",
  },
  forgot: {
    alignItems: "flex-end",
    marginTop: 20,
    marginBottom: 20,
  },
  orLine: {
    marginVertical: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  horizontalLine: {
    height: 1,
    color: "#E4E6EC",
    width: "45%",
  },
  orText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: -5,
    color: "#797b8f",
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonSocial: {
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    borderColor: "#ADB0CD",
    borderWidth: 1,
    width: "45%",
    height: 55,
  },
  textSocial: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  socialImage: {
    width: 27,
    height: 27,
    marginRight: 10,
  },
  signUp: {
    flexDirection: "row",
    marginTop: 40,
  },
  textSignUp: {
    color: "#38434D",
    fontSize: 16,
  },
  buttonSignUp: {
    marginLeft: 7,
  },
})
