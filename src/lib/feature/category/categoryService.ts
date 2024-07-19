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
};

export default categoryService;
