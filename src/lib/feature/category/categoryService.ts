import axios from "axios";

const categoryService = {
  getCategories: async () => {
    const response = await axios.get("/api/category");
    return response.data;
  },
};

export default categoryService;
