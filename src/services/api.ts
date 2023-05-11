import axios from "axios"

const api = axios.create({
  baseURL: "https://json-server-ex.onrender.com",
})

export default api
