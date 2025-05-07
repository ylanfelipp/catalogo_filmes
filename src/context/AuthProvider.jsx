import { useState } from "react"
import { AuthContext } from "./AuthContext"
import { loginResponse } from "../services/loginResponse"

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [sucess, setSucess] = useState(false)
    const login = async (username, password) => {
        const { sucess, user } = await loginResponse(username, password)
        setUser(sucess ? user : null)
        setSucess(sucess)
        return sucess
    }
    return (
        <AuthContext.Provider value={{ login, user, sucess, setSucess }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider