import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import MovieDetails from "./Pages/MovieDetails"
import Navbar from "./Components/Navbar"
import MyList from "./Pages/MyList"

function App() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/moviesdetails/:id" element={<MovieDetails />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
