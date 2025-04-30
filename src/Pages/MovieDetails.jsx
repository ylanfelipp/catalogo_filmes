import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovie } from '../utils/fetchMedia.js'
import { IMAGE_BASE_URL } from '../utils/Contantes.js'

const MovieDetails = () => {
    const { id  } = useParams()
    const [filme, setFilme] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchMovie(id)
            setFilme(result)
        }
        fetchData()
    }, [id])


    if (!filme) {
        return (
            <div className="h-screen flex justify-around items-center bg-black-500">
                <h2 className="text-6xl text-white-500">carregando...</h2>
            </div>
        )
    }

    return (
        <div className="h-screen flex justify-around items-center bg-black-500">
            <div className="">
                <img 
                    src={`${IMAGE_BASE_URL}${filme.poster_path}`} 
                    alt="capa do filme.jpg" 
                    className="h-[30rem] w-[25rem]" 
                />
            </div>
            <div className="h-[30rem] w-[45rem] text-white-500">
                <table align="center">
                    <thead className="text-center">
                        <th>Dados dos Filmes</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Título</td>
                            <td><strong>{filme.title}</strong></td>
                        </tr>
                        <tr rowspan="2">
                            <td>Título Original</td>
                            <td><strong>{filme.original_title}</strong></td>
                        </tr>
                        <tr className="h-[10rem]">
                            <td>Descrição</td>
                            <td>{filme.overview}</td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MovieDetails