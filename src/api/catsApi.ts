import { axiosInstance } from "./axiosInstance";
import { ENDPOINTS } from "./endpoints";
import { ICatImage } from "../types/cats.types";

export const fetchCats = async (
  page: number = 0,
  limit: number = 10,
  order: "ASC" | "DESC" = "ASC",
): Promise<ICatImage[]> => {
  try {
    const response = await axiosInstance.get(ENDPOINTS.SEARCH_IMAGES, {
      params: {
        limit,
        page,
        order,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Ошибка при загрузке котиков:", error);
    throw error;
  }
};
