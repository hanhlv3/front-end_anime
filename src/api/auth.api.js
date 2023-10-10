import axios from "axios";
import Cookies from "js-cookie";

const login = async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/login",
      user
    );

    if (response.status === 200) {
      // login successfully
      const token = response.data.token;
      Cookies.set("token", token, "1d");
      return true;
    } else {
      // login failed
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export default {
  login,
};
