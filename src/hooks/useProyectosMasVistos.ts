import { useEffect, useState } from "react";
import { listarProyectosMasVistos } from "../services/proyectos.service";
import type { Proyecto } from "../types/Proyecto.type";

export const useProyectosMasVistos = (limite = 10) => {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchProyectos = async () => {
      setCargando(true);
      try {
        const data = await listarProyectosMasVistos(limite);
        setProyectos(data);
      } catch (error) {
        console.error("Error al obtener proyectos mÃ¡s vistos:", error);
        setProyectos([]);
      }
      setCargando(false);
    };
    fetchProyectos();
  }, [limite]);

  return { proyectos, cargando };
};
