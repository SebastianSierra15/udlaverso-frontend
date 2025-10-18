import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Rutas públicas: no se les agrega el token
const publicEndpoints = [
  "/auth",
  "/categorias",
  "/proyectos",
  "/noticias",
  "/faqs",
];

api.interceptors.request.use((config) => {
  const isPublic = publicEndpoints.some((path) => config.url?.startsWith(path));

  if (!isPublic) {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Manejo global de errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
