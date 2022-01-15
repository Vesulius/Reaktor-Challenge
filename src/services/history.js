import axios from 'axios'

const baseUrl = 'https://bad-api-assignment.reaktor.com'

const getFirstPage = async () => {
  const response = await axios.get(`${baseUrl}/rps/history`)
  return response.data
}

const getPage = async page => {
    const response = await axios.get(`${baseUrl}${page}`)
    return response.data
}

export default {
  getFirstPage,
  getPage
}