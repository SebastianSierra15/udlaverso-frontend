import { useEffect, useState } from "react";
import { obtenerFaqs } from "../controllers/faqsController";
import type { Faq } from "../types/Faq.type";

export const useFaqs = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      setCargando(true);
      const data = await obtenerFaqs();
      setFaqs(data);
      setCargando(false);
    };
    fetchFaqs();
  }, []);

  return { faqs, cargando };
};
