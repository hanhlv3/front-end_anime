import axios from 'axios'
import Cookies from 'js-cookie'

const createData = (user, image) => {
  const formData = new FormData()
  formData.append('user', JSON.stringify(user))
  if (image != null) formData.append('image', image)
  return formData
}

const register = async (user, image) => {
  // obj data
  delete user.confirmPassword
  const data = createData(user, image)
  console.log(data)
  const response = await axios.post('http://localhost:8000/api/v1/register', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  if (response.status === 200) return true
  else return false
}

const login = async (userRequest) => {
  try {
    const response = await axios.post('http://localhost:8000/api/v1/login', userRequest)

    if (response.status === 200) {
      // login successfully
      const token = response.data.token
      Cookies.set('token', token, '1d')
      return true
    } else {
      // login failed
      return false
    }
  } catch (error) {
    console.log(error)
  }
}

const getUser = async () => {
  try {
    const token = Cookies.get('token')
    const response = await axios.get('http://localhost:8000/api/v1/user', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })

    if (response.status != 200) return null

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default {
  login,
  register,
  getUser,
}
