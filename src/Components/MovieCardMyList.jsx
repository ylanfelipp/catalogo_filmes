import React from 'react'
import { IMAGE_BASE_URL } from '../utils/Contantes'
import { useNavigate } from 'react-router-dom'
import { removeMovieFromStorage } from '../utils/localStorage'

const MovieCardMyList = ({ filme, onRemove }) => {
    const navigate = useNavigate()

    const handleRemove = (e) => {
        e.stopPropagation()
        const novaLista = removeMovieFromStorage(filme.id)
        console.log(`Filme removido: ${filme.title}`)
        if (onRemove) onRemove(novaLista)
    }

    return (
        <div className="relative mx-4 my-4 min-h-[25rem] min-w-[20rem]">
            <div className="rounded overflow-auto">
                <img
                    src={`${IMAGE_BASE_URL}${filme.poster_path}`}
                    className="object-cover min-h-[25rem] min-w-[20rem]"
                />
            </div>
            <div className="absolute inset-0 min-h-[25rem] min-w-[20rem] opacity-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-black min-h-[25rem] min-w-[20rem] opacity-60"></div>
                <div className="absolute top-[42%] left-[18%] min-h-[25rem] min-w-[20rem] text-center">
                    <img src="/play_circle.svg" className="relative left-[25%] h-[10rem] w-[10rem]" onClick={() => navigate(`/moviesdetails/${filme.id}`)} />
                    <div className="absolute text-center w-full">
                        <h2 className="text-white-500 text-[2rem] font-bold">
                            {filme.title}
                        </h2>
                        <div className="absolute text-center w-full text-3xl text-white-500">
                            <button
                                onClick={handleRemove}
                                className="border-2 border-solid border-white-500 p-2 cursor-pointer hover:bg-white-500 hover:text-red-500 transition-all duration-300 rounded font-semibold">
                                X Remover Filme
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCardMyList