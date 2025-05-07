import React, { useState } from 'react'

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="h-screen bg-black-500 flex justify-center items-center">
            <form className="bg-white h-[20rem] w-[25rem] rounded flex flex-col justify-center items-center">
                <div>
                    <label htmlFor="username" className="label">
                        usuário
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Nome"
                        className="input-lg"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="pwd" className="label">
                        senha
                    </label>
                    <input
                        type="password"
                        name="pwd"
                        id="pwd"
                        placeholder="Senha"
                        className="input-lg"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn-login">
                    Entrar
                </button>
            </form>
        </div>
    )
}

export default LoginPage