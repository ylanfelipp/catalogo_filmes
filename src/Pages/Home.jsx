import React from 'react'
import MovieList from '../Components/MovieList'

const Home = () => {
    return (
        <div className="bg-black-500 min-h-screen">
            <div className="p-4">
                <MovieList />
            </div>
        </div>
    )
}

export default Home