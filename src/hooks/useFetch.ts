import { useEffect, useState } from "react";
import api from "../services/api";

export function useFetch<T>(endpoint: string, deps: any[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    api
      .get(endpoint)
      .then((res) => {
        if (mounted) setData(res.data);
      })
      .catch(() => {
        if (mounted) setError("Error al cargar datos");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, deps);

  return { data, loading, error };
}
