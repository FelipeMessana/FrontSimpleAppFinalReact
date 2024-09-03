import { url } from "../config/urlapis";

export const getCatalogApi = async (token) => {
  const response = await fetch(`${url}/catalog`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};
