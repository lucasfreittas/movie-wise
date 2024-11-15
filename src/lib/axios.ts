import axios from 'axios'

export const movieapi = axios.create({
  baseURL: '/api',
})