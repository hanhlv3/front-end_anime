import axios from 'axios'
import Cookies from 'js-cookie'

// insert film
const insertFilmStore = async (filmId) => {
  const token = Cookies.get('token')
  const response = await axios.post('http://localhost:8000/api/v1/user/film_store/' + filmId, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (response.status === 200) return true
  else return false
}

// delete a film
const deleteFilmStore = async (filmId) => {
  try {
    const token = Cookies.get('token')
    const response = await axios.delete('http://localhost:8000/api/v1/user/film_store/' + filmId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.status === 200
  } catch (error) {
    console.log(error)
  }
}

const getFilmStores = async () => {
  try {
    const token = Cookies.get('token')
    const response = await axios.get('http://localhost:8000/api/v1/user/film_store', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const films = response.data
    return films
  } catch (error) {
    console.log(error)
  }
}

export default {
  getFilmStores,
  insertFilmStore,
  deleteFilmStore,
}
