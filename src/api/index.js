import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 1000,
})

api.interceptors.request.use((config) => {
  const dataUser = JSON.parse(localStorage.getItem('data_user'))
  if (dataUser) {
    const { access_token } = dataUser
    config.headers['Authorization'] = `Bearer ${access_token}`
  } else {
    localStorage.removeItem('data_user')
  }

  return config
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status == 401) {
      localStorage.removeItem('jwt_token')
    }

    return Promise.reject(error)
  },
)

export default api
