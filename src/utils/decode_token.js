import Cookies from 'js-cookie'

export const decodeToken = () => {
  const token = Cookies.get('token')
  console.log('token', token)
}
