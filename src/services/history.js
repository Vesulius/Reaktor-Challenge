import axios from 'axios'

const baseUrl = 'https://afternoon-meadow-18887.herokuapp.com/https://bad-api-assignment.reaktor.com'

const getFirstPage = async () => {
  const response = await axios.get(`${baseUrl}/rps/history`)
  return response.data
}

const getPage = async page => {
    const response = await axios.get(`${baseUrl}${page}`)
    return response.data
}

const getAll = async (page, games) => {
  const response = await axios.get(`${baseUrl}${page}`)
  if (!response.cursor) {
    return games
  }
  return getAll(response.cursor, games.concat(response.data))
}

export default {
  getFirstPage,
  getPage,
  getAll
}