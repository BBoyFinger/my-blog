import { Category } from "@prisma/client";
import axios from "axios";

const categoryService = {
  getAllCategories: async () => {
    const response = await axios.get("/api/category");
    return response.data;
  },
  getCategoryById: async (id: any) => {
    const response = await axios.get(`/api/category?id=${id}`);
    return response.data;
  },
  createCategory: async (data: any) => {
    const response = await axios.post("/api/category", data);
    return response.data;
  },
  updateCategory: async (Category: any) => {
    const response = await axios.put(`/api/category?id=${Category.id}`, {
      name: Category.name,
      description: Category.description,
    });
    return response.data;
  },
  deleteCategory: async (id: any) => {
    const response = await axios.delete(`/api/category?id=${id}`);
    return response.data;
  },
};

export default categoryService;
