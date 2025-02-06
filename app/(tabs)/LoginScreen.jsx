import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React, {useState} from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.headerImageLoginScreen}
          source={require("../../assets/BuyFree_images/Logo white Buy Free.png")}
        />
      </View>

      <KeyboardAvoidingView>
        <View>
          <Text style={styles.textForLogin}>Connectez vous à votre compte</Text>
        </View>
      </KeyboardAvoidingView>

      <View style={styles.inputEmailViewFather}>
        <View style={styles.inputEmailView}>
          <MaterialCommunityIcons
            style={styles.emailIcon}
            name="email"
            size={20}
            color="black"
          />
          <TextInput
            style={styles.inputEmailLogin}
            placeholder="Entrez votre Email"
            placeholderTextColor="black"
          />
        </View>
      </View>

      <View style={styles.inputEmailViewFather2}>
        <View style={styles.inputEmailView}>
          <FontAwesome6
            style={styles.passwordIcon}
            name="lock"
            size={20}
            color="black"
          />
          <TextInput
            style={styles.inputEmailLogin}
            placeholder="Entrez votre mot de passe"
            placeholderTextColor="black"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  headerImageLoginScreen: {
    marginTop: 50,
    width: 150,
    height: 150,
  },
  textForLogin: {
    fontWeight: "semi-bold",
    fontSize: 17,
    marginTop: 25,
    fontFamily: "Nunito-regular",
    color: "black",
  },
  inputEmailLogin: {
    padding: 5,
    margin: 10,
    marginVertical: 10,
    width: 300,
    color: "black",
  },
  inputEmailView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#D0D0D0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
    fontFamily: "semi-bold",
  },
  emailIcon: {
    marginLeft: 8,
    color: "grey",
  },
  passwordIcon: {
    marginLeft: 8,
    color: "grey",
  },
  inputEmailViewFather: {
    marginTop: 70,
  },
  inputEmailViewFather2: {
    marginTop: 30,
  },
});
