import axios from "axios"
const API_URL = "https://681b9bcd17018fe5057c3031.mockapi.io/v1/api/users"
export const loginResponse = async (username, password) => {
    const response = await axios.get(API_URL)
    const users = response.data
    const user = users.find(user => user.name === username && user.password === password)
    if (!user) {
        return { sucess: false, user: null }
    }

    return { sucess: user ? true : false, user }
}