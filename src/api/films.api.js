import axios from 'axios'
import Cookies from 'js-cookie'

const createData = (film, image) => {
  const formData = new FormData()
  formData.append('film', JSON.stringify(film))
  if (image != null) formData.append('image', image)
  return formData
}

// insert film
const insertFilm = async (film, image) => {
  // Tạo một đối tượng FormData
  const data = createData(film, image)
  const token = Cookies.get('token')
  const response = await axios.post('http://localhost:8000/api/v1/private/film', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  })
  if (response.status === 200) return true
  else return false
}

// update film
const updateFilm = async (filmId, film, image) => {
  try {
    const token = Cookies.get('token')
    // Tạo một đối tượng FormData
    const data = image == null ? createData(film, null) : createData(film, image)
    console.log(data)
    const response = await axios.put('http://localhost:8000/api/v1/private/film/' + filmId, data, {
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

// delete a film
const deleteFilm = async (filmId) => {
  try {
    const token = Cookies.get('token')
    const response = await axios.delete('http://localhost:8000/api/v1/private/film/' + filmId, {
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

const getAllFilms = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/v1/public/film')
    const films = response.data
    return films
  } catch (error) {
    console.log(error)
  }
}

export default {
  getAllFilms,
  insertFilm,
  updateFilm,
  deleteFilm,
}
