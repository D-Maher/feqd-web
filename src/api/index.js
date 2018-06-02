import apisauce from "apisauce"
import environments from "../config/environments"

const { baseURL } = environments[1]

const createApi = ({ baseURL }) => {
  const api = apisauce.create({
    baseURL,
  })

  // Gets a list of all decks from the API
  const getDecks = () => {
    return api.get("/decks")
  }

  return {
    getDecks,
  }
}

const api = createApi({ baseURL })
export default api
