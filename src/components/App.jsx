
import { useEffect, useState } from "react"
import { fetchById, fetchByName, fetchTrendings } from "./fetch";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { Home } from "./Home/Home";
import { Movies } from "./Movies/Movies";
import { SearchBar } from "./SearchBar/SearchBar";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
export const App = () => {
  // const [app, setApp] = useState({ home: [], movies: [], movie: [] });
  const stateMachine = {
    PENDING: "pending",
    REJECTED: "rejected",
    RESOLVED: "resolved",
    ERROR: "error"
  }
  const [home, setHome] = useState([]);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState('');
  useEffect(() => {
    fetchTrendings().then(({ data }) => setHome(data.results))
  }, [])
  const handleSubmit = (query) => {
    fetchByName(query).then(({ data }) => {
      setMovies(data.results)
      setStatus(stateMachine.RESOLVED)
    })
  }

  return <>
    <Header />
    <Routes>
      <Route path="/" element={<Home movies={home} />} />
      <Route path="/home" element={<Home movies={home} />} />
      <Route path="/movies" element={<SearchBar onSubmit={handleSubmit} />}>
        <Route index element={<Movies movies={movies} />} />
        <Route path=":id" element={<MovieDetails movies={movies} />} >
          <Route path="cast" element={<Cast movies={movies} />} />
        </Route>
      </Route>
    </Routes>

  </>
}