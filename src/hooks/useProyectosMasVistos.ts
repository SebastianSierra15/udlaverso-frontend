import { useEffect, useState } from "react";
import { obtenerProyectosMasVistos } from "../controllers/proyectosController";
import type { Proyecto } from "../types/Proyecto.type";

export const useProyectosMasVistos = (limite = 10) => {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchProyectos = async () => {
      setCargando(true);
      const data = await obtenerProyectosMasVistos(limite);
      setProyectos(data);
      setCargando(false);
    };
    fetchProyectos();
  }, [limite]);

  return { proyectos, cargando };
};
