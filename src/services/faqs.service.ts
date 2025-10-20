import api from "./api";
import type { Faq } from "../types/Faq";

export const listarFaqs = async (): Promise<Faq[]> => {
  const { data } = await api.get<Faq[]>("/faqs");
  return data;
};
