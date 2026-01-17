import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://696b317a624d7ddccaa07c96.mockapi.io',
  responseType: 'json',
  timeout: 2000
})

export { axiosInstance }
