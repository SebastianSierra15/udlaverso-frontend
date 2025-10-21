import type { Rol } from "./Rol.type";
import type { Permiso } from "./Permiso.type";

export interface Usuario {
  idUsuario?: number;
  nombresUsuario?: string;
  apellidosUsuario?: string;
  correoUsuario: string;
  universidadUsuario?: string;
  rolUsuario: Rol;
  permisos: Permiso[];
  token?: string;
}
