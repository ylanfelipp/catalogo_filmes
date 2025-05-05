
const api_url = import.meta.env.VITE_API_URL
const api_key = import.meta.env.VITE_API_KEY

export async function fetchPopularMovies(page = 1) {
    if (page < 1) {
        page = 1
    }
    const result = await fetch(`${api_url}/movie/popular?api_key=${api_key}&language=pt-BR&page=${page}`)
    if (!result.ok) {
        const err = await result.json().catch(() => ({}));
        throw new Error(err.status_message || 'Falha ao consultar a API');
    }

    const data = await result.json()
    return data.results
}

export async function fetchMovie(id) {
    const result = await fetch(`${api_url}/movie/${id}?api_key=${api_key}&language=pt-BR`)
    if (!result.ok) {
        const err = await result.json().catch(() => ({}));
        throw new Error(err.status_message || 'Falha ao consultar a API');
    }

    const data = await result.json()
    return data
}
