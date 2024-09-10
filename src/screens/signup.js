import { React, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-paper";
import Input from "../components/input";
import { signupApi } from "../apis/signupApi";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignup = async () => {
    if (!username || !email || !password) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }

    try {
      const data = await signupApi(username, email, password);
      //console.log("Response:", response); // Verifica la respuesta completa

      // const data = await response.json();
      if (data.success) {
        Alert.alert("Perfecto", "Cuenta creada correctamente.");
        navigation.navigate("Login");
      } else {
        Alert.alert("Error", data.message || "No se pudo crear la cuenta.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      Alert.alert(
        "Error",
        "No se pudo crear la cuenta. Verifica tu conexión a internet e intenta nuevamente."
      );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 16 }}>
      <Text style={styles.headerText}>Crear Cuenta</Text>
      <Input
        label="Nombre de Usuario"
        icon="account"
        value={username}
        onChange={setUsername}
      />
      <Input
        label="Correo Electrónico"
        icon="email"
        value={email}
        onChange={setEmail}
      />
      <Input
        label="Contraseña"
        icon="lock"
        value={password}
        secureTextEntry={true}
        onChange={setPassword}
      />
      <Button
        mode="contained"
        onPress={handleSignup}
        style={styles.signupButton}
      >
        Crear Cuenta
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  signupButton: {
    marginTop: 20,
  },
});

export default Signup;
