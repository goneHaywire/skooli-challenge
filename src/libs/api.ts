import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.imgur.com/3',
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_IMGUR_CLIENT_ID}`,
  },
})

export default api
