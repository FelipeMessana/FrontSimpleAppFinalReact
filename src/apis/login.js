import { login } from "../config/urlapis"; // Importa la URL desde config

export const loginApi = async (email, password) => {
  try {
    const response = await fetch(login, {
      // Usa la URL importada
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
