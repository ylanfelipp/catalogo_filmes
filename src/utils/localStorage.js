const STORAGE_KEY = '@minhaListaFilmes';

export function getStoredMovies() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (err) {
        console.error('Erro lendo localStorage:', err);
        return [];
    }
}

function saveMovies(movies) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
    } catch (err) {
        console.error('Erro gravando localStorage:', err);
    }
}

export function addMovieToStorage(filme) {
    const movies = getStoredMovies();
    const exists = movies.find(m => m.id === filme.id);
    if (!exists) {
        movies.push(filme);
        saveMovies(movies);
    }
    return movies;
}

export function removeMovieFromStorage(filmeId) {
    let movies = getStoredMovies();
    movies = movies.filter(m => m.id !== filmeId);
    saveMovies(movies);
    return movies;
}
