import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Platform,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import Input from "../components/input";
import PassInput from "../components/passinput";
import { loginApi } from "../apis/login";
import { save } from "../utils/storage";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(
        "Error",
        "Por favor, ingresa el correo electrónico y la contraseña."
      );
      return;
    }

    try {
      const data = await loginApi(email, password);
      if (data.success) {
        await save("token", data.token);
        Alert.alert("Perfecto", "Iniciaste sesión correctamente.");
        navigation.navigate("tabs");
      } else {
        Alert.alert(
          "Error",
          "Correo electrónico o contraseña incorrecta. Verifica tus credenciales e intenta nuevamente."
        );
      }
    } catch (error) {
      console.error("Error logging in:", error);
      Alert.alert(
        "Error",
        "No se pudo iniciar sesión. Verifica tu conexión a internet e intenta nuevamente."
      );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/bgprincipal.jpg")}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.overlay} />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Icon name="home" size={30} color="#fff" />
          </TouchableOpacity>

          <View style={styles.topSpace} />
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/logo.jpg")}
              style={styles.logo}
            />
            <Text style={styles.greetingText}>Bienvenido a SportShop!</Text>
          </View>
          <View style={styles.inputContainer}>
            <Input
              label="Correo Electrónico"
              icon="email"
              value={email}
              onChange={setEmail}
            />
            <PassInput
              label="Contraseña"
              value={password}
              onChange={setPassword}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.loginButton}
            >
              Ingresar
            </Button>
            <Button
              mode="outlined"
              onPress={() => navigation.navigate("crearCuenta")}
              style={styles.createAccountButton}
            >
              Crear Cuenta
            </Button>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" && 25,
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  topSpace: {
    flex: 0.1,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.4,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  inputContainer: {
    flex: 0.3,
    padding: 10,
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    width: "80%",
  },
  createAccountButton: {
    marginTop: 10,
  },
  homeButton: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
});

export default Login;
