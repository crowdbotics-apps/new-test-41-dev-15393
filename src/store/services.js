import axios from "axios"
import {} from "react-native-dotenv"
const plugin = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/7238/storyboard/8485/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const weatherAPI = axios.create({
  baseURL: "https://www.weatherapi.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const newPluginXXXX = axios.create({
  baseURL: "https://a.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const plugin = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/7307/storyboard/8491/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function weatherapi_get__read(action) {
  return weatherAPI.get(`/`)
}
function newpluginxxxx_get__read(action) {
  return newPluginXXXX.get(`/`)
}
export const apiService = { weatherapi_get__read, newpluginxxxx_get__read }
