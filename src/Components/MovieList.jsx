import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { fetchPopularMovies } from '../utils/fetchMedia'

const MovieList = () => {
    const [filmes, setFilmes] = useState([])
    const [page, setPage] = useState(1)
    useEffect(() => {
        fetchPopularMovies(page)
            .then(filmes => {
                setFilmes(filmes)
            })
            .catch(console.log)
    }, [page])

    return (
        <div>
            <div className="flex justify-center items-center gap-3">
                <button 
                    type="button" onClick={() => setPage(page => page - 1)} 
                    className="button-page">
                    Anterior
                </button>
                <button onClick={() => setPage(page => page + 1)} className="button-page">
                    Próximo
                </button>
            </div>
            <div className="flex flex-wrap items-center justify-center my-4 mx-4 p-6 h-full">
                {filmes.map((filme) => (
                    <MovieCard filme={filme} key={filme.id} />
                ))}
            </div>
            <div className="flex justify-center items-center gap-3">
                <button 
                    type="button" onClick={() => setPage(page => page - 1)} 
                    className="button-page">
                    Anterior
                </button>
                <button onClick={() => setPage(page => page + 1)} className="button-page">
                    Próximo
                </button>
            </div>
        </div>
    )
}

export default MovieList