import api from "./api";
import type { Faq } from "../types/Faq.type";

export const listarFaqs = async (): Promise<Faq[]> => {
  const { data } = await api.get<Faq[]>("/faqs");
  return data;
};
