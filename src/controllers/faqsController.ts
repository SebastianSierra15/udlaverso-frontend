import * as faqsService from "../services/faqs.service";

export const obtenerFaqs = async () => {
  try {
    return await faqsService.listarFaqs();
  } catch (error) {
    console.error("Error al obtener las FAQs:", error);
    return [];
  }
};
