import axios from 'axios'
import Cookies from 'js-cookie'

// insert category
const insertCategory = async (categoryName) => {
  const token = Cookies.get('token')
  const response = await axios.post('http://localhost:8000/api/v1/private/category', categoryName, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.status === 200) return true
  else return false
}

// update category
const updateCategory = async (categoryId, categoryName) => {
  try {
    const token = Cookies.get('token')
    const response = await axios.put('http://localhost:8000/api/v1/private/category/' + categoryId, categoryName, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) return true
    else return false
  } catch (error) {
    console.log(error)
  }
}

// delete a category
const deleteCategory = async (categoryId) => {
  try {
    const token = Cookies.get('token')
    const response = await axios.delete('http://localhost:8000/api/v1/private/category/' + categoryId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) return true
    else return false
  } catch (error) {
    console.log(error)
  }
}

const getAllCategories = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/v1/public/categories')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default {
  getAllCategories,
  insertCategory,
  updateCategory,
  deleteCategory,
}
