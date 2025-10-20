import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8090";

export const loginService = async (correo: string, contrasenia: string) => {
  const res = await axios.post(`${API_URL}/auth/login`, {
    correo,
    contrasenia,
  });
  return res.data;
};

export const registroService = async (data: Record<string, string>) => {
  const res = await axios.post(`${API_URL}/auth/registro`, data);
  return res.data;
};
