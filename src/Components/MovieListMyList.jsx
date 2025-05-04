import React, { useState } from 'react'
import MovieCardMyList from './MovieCardMyList'
import { getStoredMovies } from '../utils/localStorage'

const MovieListMyList = () => {
    const [filmes, setFilmes] = useState(getStoredMovies())

    return (
        <div className="flex flex-wrap items-center justify-center mx-4 p-6 h-full">
            {filmes.map((filme) => (
                <MovieCardMyList filme={filme} key={filme.id} onRemove={novaLista => setFilmes(novaLista)} />
            ))}
        </div>
    )
}

export default MovieListMyList