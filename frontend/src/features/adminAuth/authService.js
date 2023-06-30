import axios from 'axios'

const API_URL = '/api/admin/'

const login1 = async (adminData) => {
  const response = await axios.post(API_URL + 'login', adminData)

  if (response.data) {
    localStorage.setItem('admin', JSON.stringify(response.data))
  }

  return response.data
}

const logout1 = () => {
  localStorage.removeItem('admin')
}

const authService = {
  logout1, login1
}

export default authService