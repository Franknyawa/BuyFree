//import liraries
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React, { useState, } from "react";
import { useNavigation } from "@react-navigation/native";


// create a component
const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Image
        style={styles.headerImageLoginScreen}
        source={require("../../assets/BuyFree_images/Logo white Buy Free.png")}
      />
    </View>
    <View>
      <Text style={styles.textForLogin}>Creez votre Compte</Text>
    </View>
    
                                    
    <KeyboardAvoidingView>

    <View style={styles.inputEmailViewFather}>
      <View style={styles.inputEmailView}>
        <MaterialCommunityIcons
          style={styles.emailIcon}
          name="Person"
          size={20}
          color="black"
        />
        <TextInput
          style={styles.inputEmailLogin}
          placeholder="Entrez votre Nom"
          placeholderTextColor="black"
        />
      </View>
    </View>
    <View style={styles.inputEmailViewFather}>
      <View style={styles.inputEmailView}>
        <MaterialCommunityIcons
          style={styles.emailIcon}
          name="email"
          size={20}
          color="black"
        />
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
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
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style={styles.inputEmailLogin}
          placeholder="Entrez votre mot de passe"
          placeholderTextColor="black"
        />
      </View>
    </View>

    <View style={styles.sectionForgotPassword}>
      <Text style={styles.resterConnecte}>Restez connectés</Text>
      
    </View>

    <View style={styles.sectionLoginButton}>
      <Pressable style={styles.loginButton}>
        <Text style={styles.login} >S'Inscire</Text>
      </Pressable>
    </View>

    <Pressable onPress={() =>navigation.goBack()} style={styles.PressForSignup}>
      <Text style={styles.Signup}>Connectez - vous</Text>
    </Pressable>

  </KeyboardAvoidingView>
</SafeAreaView>
  );
};
 
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  headerImageLoginScreen: {
    marginTop: 60,
    width: 150,
    height: 150,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textForLogin: {
    fontWeight: 400,
    fontSize: 17,
    marginTop: 25,
    color: "black",
    alignItems: "center",
    flexDirection: "row",
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
    marginTop: 40,
  },
  inputEmailViewFather2: {
    marginTop: 30,
  },
  sectionForgotPassword: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  resterConnecte: {},
  
  sectionLoginButton:{
    width: 200,
    backgroundColor: "#FEBE10",
    borderRadius: 8,
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
    marginTop: 50,
    alignItems: "center",

  },
  loginButton:{
    textAlign: "center",
    fontSize: 15,
  },
  login:{
    color: "black",
    fontWeight: 800,
    fontSize: 15,
  },
  PressForSignup:{
    marginTop: 22,
  },
  Signup:{
    textAlign: "center",
    color:"grey",
    fontSize: 15,
  }
});

//make this component available to the app
export default RegisterScreen;
