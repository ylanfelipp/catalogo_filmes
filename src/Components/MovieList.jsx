import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { fetchPopularMovies } from '../utils/fetchMedia'

const MovieList = () => {
    const [filmes, setFilmes] = useState([])
    useEffect(() => {
        fetchPopularMovies()
            .then(filmes => {
                setFilmes(filmes)
            })
            .catch(console.log)
    }, [])

    return (
        <div className="flex flex-wrap items-center justify-center my-4 mx-4 p-6 h-full">
            {filmes.map((filme) => (
                <MovieCard filme={filme} key={filme.id} />
            ))}
        </div>
    )
}

export default MovieList