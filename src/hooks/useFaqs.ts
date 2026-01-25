import { useEffect, useState } from "react";
import { listarFaqs } from "../services/faqs.service";
import type { Faq } from "../types/Faq.type";

export const useFaqs = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      setCargando(true);
      try {
        const data = await listarFaqs();
        setFaqs(data);
      } catch (error) {
        console.error("Error al obtener las FAQs:", error);
        setFaqs([]);
      }
      setCargando(false);
    };
    fetchFaqs();
  }, []);

  return { faqs, cargando };
};
