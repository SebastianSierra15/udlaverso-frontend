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

export const enviarCodigoService = async (
  correo: string,
  tipo = "registro"
) => {
  const res = await axios.post(`${API_URL}/auth/enviar-codigo`, {
    correo,
    tipo,
  });
  return res.data;
};

export const verificarCodigoService = async (
  correo: string,
  codigo: string,
  tipo = "registro"
) => {
  const res = await axios.post(`${API_URL}/auth/verificar-codigo`, {
    correo,
    codigo,
    tipo,
  });
  return res.data;
};

export const restablecerContraseniaService = async (
  correo: string,
  codigo: string,
  nuevaContrasenia: string
) => {
  const res = await axios.post(`${API_URL}/auth/restablecer-contrasenia`, {
    correo,
    codigo,
    nuevaContrasenia,
  });
  return res.data;
};
