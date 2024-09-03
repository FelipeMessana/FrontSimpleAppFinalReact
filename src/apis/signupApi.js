import { signup } from "../config/urlapis"; // Importa la URL desde config

export const signupApi = async (username, email, password) => {
  try {
    const response = await fetch(signup, {
      // Usa la URL importada
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};
