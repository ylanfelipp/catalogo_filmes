import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import MovieDetails from "./Pages/MovieDetails"
import Navbar from "./Components/Navbar"
import MyList from "./Pages/MyList"
import LoginPage from "./Pages/LoginPage"
import PrivateRoute from "./Components/PrivateRoute"

function App() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <PrivateRoute>
                                <Route path="/" element={<Home />} />
                                <Route path="/moviesdetails/:id" element={<MovieDetails />} />
                                <Route path="/minhalista" element={<MyList />} />
                            </PrivateRoute>} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </BrowserRouter>
            </main>
        </div>
    )
}

export default App
