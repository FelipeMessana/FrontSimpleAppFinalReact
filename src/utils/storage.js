import * as SecureStore from "expo-secure-store";

// Guardar un valor (serializado a JSON)
export const save = async (key, value) => {
  try {
    const stringValue = JSON.stringify(value); // Convierte el valor a una cadena JSON
    await SecureStore.setItemAsync(key, stringValue);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// Obtener un valor (deserializar de JSON)
export const getValueFor = async (key) => {
  try {
    let result = await SecureStore.getItemAsync(key);
    return result ? JSON.parse(result) : null; // Si hay un resultado, lo convierte de JSON
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteValue = async (key) => {
  try {
    await SecureStore.deleteItemAsync(key);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getToken = async () => {
  try {
    let token = await SecureStore.getItemAsync("token");
    return token ? JSON.parse(token) : null; // Asegúrate de que el token esté bien deserializado
  } catch (error) {
    console.log(error);
    return null;
  }
};
