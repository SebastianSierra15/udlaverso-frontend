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
  "/analiticas",
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
    const status = error.response?.status;
    const data = error.response?.data;

    // Detectar token expirado o inválido
    if (
      status === 401 ||
      (status === 403 && typeof data === "string" && data.includes("JWT"))
    ) {
      console.warn("⚠️ Token expirado o inválido. Redirigiendo a login...");
      localStorage.removeItem("token");
      window.location.href = "/login";
      return Promise.reject(new Error("Sesión expirada"));
    }

    return Promise.reject(error);
  }
);

export default api;
