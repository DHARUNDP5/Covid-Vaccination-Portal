import axios from 'axios'

const API_URL = '/api/admin/centreDetails'

const getCentres = async () => {

  const response = await axios.get(API_URL)

  return response.data
}

const centreService = { getCentres }

export default centreService