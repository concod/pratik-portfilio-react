import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL_STRAPI;
const authToken = process.env.REACT_APP_AUTH_STRAPI;

const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
});

export const fetchData = async ({ endpoint }) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
