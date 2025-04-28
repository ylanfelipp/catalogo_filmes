import React from 'react'

const MovieCard = () => {
    return (
        <div className="relative">
            <div className="rounded overflow-auto">
                <img
                    src="https://m.media-amazon.com/images/S/pv-target-images/5708edd5c8fc2c5b4a2ee3c96d289e281bd07cde4d2e7d2ad69973f9c7a48984.jpg"
                    className="object-cover h-[15rem] w-[10rem]"
                />
            </div>
            <div className="absolute inset-0 h-[15rem] w-[10rem] opacity-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                <div className="bg-black h-[15rem] w-[10rem] opacity-60"></div>
                <img src="/play_circle.svg" className="absolute top-14 left-10 h-[5rem] w-[5rem]" />
                <h2 className="text-center text-white-500 absolute bottom-[15%] left-[0.5%] text-[1rem] font-bold">
                    Scott Pilgrim contra o Mundo
                </h2>
            </div>
        </div>
    )
}

export default MovieCard