import React from 'react'
import MovieCard from '../Components/MovieCard'
import MovieList from '../Components/MovieList'

const Home = () => {
    return (
        <div className="bg-black-500 h-screen">
            <h2 className="text-3xl text-white-500 text-center font-bold p-4">
                Catálogo de Filmes
            </h2>
            <div className="p-4">
                <MovieList  />
            </div>
        </div>
    )
}

export default Home