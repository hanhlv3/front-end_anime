import axios from "axios";
import Cookies from "js-cookie";

// insert category
const insertCategory = async (categoryName) => {
  const token = Cookies.get("token");
  console.log(categoryName);
  const response = await axios.post(
    "http://localhost:8000/api/v1/private/category",
    categoryName,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(token);
  console.log(response);
};

const getAllCategories = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/public/categories"
    );
    const categories = response.data;
    return categories;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAllCategories,
  insertCategory,
};
