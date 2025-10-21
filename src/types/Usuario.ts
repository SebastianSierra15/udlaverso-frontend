export interface Permiso {
  idPermiso?: number;
  nombrePermiso: string;
}

export interface Rol {
  idRol: number;
  nombreRol: string;
}

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
