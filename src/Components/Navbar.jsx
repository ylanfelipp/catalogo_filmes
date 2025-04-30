import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-[#000] flex justify-around items-center h-16">
            <div>
                <Link to="/">
                    <h1 className="text-4xl text-red-400 font-bold">
                        Pipocaflix
                    </h1>
                </Link>
            </div>
            <div className="text-white-500">
                <Link to="/">
                    <button className="mx-4 cursor-pointer">Início</button>
                </Link>
                <Link to="/minhalista">
                    <button className="mx-4 cursor-pointer">Minha Lista</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar