import axios from 'axios'

const API_URL = '/api/user'

const createApply = async (applyData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL+'/apply', applyData, config)

  return response.data
}

const getCentres = async () => {

  const response = await axios.get('/api/admin/centreDetails')

  return response.data.centre
}

const getApply = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + '/getApply', config)

  return response.data
}

const applyService = { createApply, getCentres, getApply }

export default applyService