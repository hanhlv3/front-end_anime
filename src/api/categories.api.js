import axios from "axios";
import Cookies from "js-cookie";

// insert category
const insertCategory = async (categoryName) => {
  try {
    const token = Cookies.get("token");
    if (token === null) return false;
    const response = await axios.post(
      "http://localhost:800/api/v1/private/category",
      categoryName,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      // insert success
      return true;
    } else {
      // insert failed
      return false;
    }
  } catch (error) {
    console.log(error);
  }
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
