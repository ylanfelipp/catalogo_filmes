import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovie } from '../utils/fetchMedia.js'
import { IMAGE_BASE_URL } from '../utils/Contantes.js'

const MovieDetails = () => {
    const { id } = useParams()
    const [filme, setFilme] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchMovie(id)
            setTimeout(() => {
                setFilme(result)
            }, 300)
        }
        fetchData()
    }, [id])

    if (!filme) {
        return (
            <div className="h-screen flex justify-around items-center bg-black-500 text-7xl text-white-500">
                carregando...
            </div>
        )
    }

    return (
        <>
            {filme && <div className="min-h-screen flex justify-around items-center bg-black-500 p-8">
                <div className="">
                    <img
                        src={`${IMAGE_BASE_URL}${filme.poster_path}`}
                        alt="capa do filme.jpg"
                        className="object-cover min-h-[25rem] min-w-[20rem]"
                    />
                </div>
                <div className="max-w-3xl flex justify-center items-center p-4">
                    <table className="w-full bg-[var(--color-black-500)] text-[var(--color-white-500)] rounded-lg overflow-hidden shadow-lg">
                        <tbody className="divide-y divide-gray-700">
                            <tr>
                                <th colSpan="2" className="px-6 py-4 bg-[var(--color-red-600)] text-xl font-bold text-center">
                                    {filme.title} ({filme.original_title})
                                </th>
                            </tr>
                            <tr className="bg-[var(--color-black-500)] hover:bg-gray-800">
                                <th className="w-1/3 px-6 py-3 text-left bg-[var(--color-red-600)] font-semibold">Sinopse</th>
                                <td className="px-6 py-3">{filme.overview}</td>
                            </tr>
                            <tr className="bg-gray-900 hover:bg-gray-800">
                                <th className="px-6 py-3 text-left bg-[var(--color-red-600)] font-semibold">Data de Lançamento</th>
                                <td className="px-6 py-3">{new Date(filme.release_date).toLocaleDateString()}</td>
                            </tr>
                            <tr className="bg-[var(--color-black-500)] hover:bg-gray-800">
                                <th className="px-6 py-3 text-left bg-[var(--color-red-600)] font-semibold">Gêneros</th>
                                <td className="px-6 py-3">{filme.genres?.map(g => g.name).join(', ')}</td>
                            </tr>
                            <tr className="bg-gray-900 hover:bg-gray-800">
                                <th className="px-6 py-3 text-left bg-[var(--color-red-600)] font-semibold">Duração</th>
                                <td className="px-6 py-3">{filme.runtime} minutos</td>
                            </tr>
                            <tr className="bg-[var(--color-black-500)] hover:bg-gray-800">
                                <th className="px-6 py-3 text-left bg-[var(--color-red-600)] font-semibold">Avaliação</th>
                                <td className="px-6 py-3">
                                    <span className="text-[var(--color-red-400)] font-bold">{Math.floor(filme.vote_average)}/10</span>
                                    <span className="ml-2 text-gray-400">({filme.vote_count} votos)</span>
                                </td>
                            </tr>
                            <tr className="bg-[var(--color-black-500)] hover:bg-gray-800">
                                <th className="px-6 py-3 text-left bg-[var(--color-red-600)] font-semibold">Status</th>
                                <td className="px-6 py-3 capitalize">{filme.status?.toLowerCase()}</td>
                            </tr>
                            <tr className="bg-gray-900 hover:bg-gray-800">
                                <th className="px-6 py-3 text-left bg-[var(--color-red-600)] font-semibold">Idioma Original</th>
                                <td className="px-6 py-3 uppercase">{filme.original_language}</td>
                            </tr>
                            <tr className="bg-[var(--color-black-500)] hover:bg-gray-800">
                                <th className="px-6 py-3 text-left bg-[var(--color-red-600)] font-semibold">Países de Produção</th>
                                <td className="px-6 py-3">{filme.production_countries?.map(pc => pc.name).join(', ')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>}
        </>

    )
}

export default MovieDetails