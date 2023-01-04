
import { useEffect, useState, lazy } from "react"
import { fetchByName, fetchTrendings } from "./fetch";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Layout } from "./Layout/Layout";
const Movies = lazy(() => import('../components/Movies/Movies'))
const Cast = lazy(() => import('../components/Cast/Cast'))
const Reviews = lazy(() => import('../components/Review/Reviews'))
const MovieDetails = lazy(() => import('../components/MovieDetails/MovieDetails'))
const SearchBar = lazy(() => import('../components/SearchBar/SearchBar'))
export const App = () => {
  const [home, setHome] = useState([]);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {

    fetchTrendings().then(({ data }) => {
      setHome(data.results)

    })
  }, [])
  const handleSubmit = (query) => {
    fetchByName(query).then(({ data }) => {
      if (data.results.length > 0) {
        setMovies(data.results)
        setQuery(query);
      } else {
        setMovies([])
      }
    })
  }
  const onClickHome = (e) => {
    setQuery('');
  }
  return <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home options={query} onClick={onClickHome} movies={home} />} />
        <Route path="movies" element={<SearchBar onSubmit={handleSubmit} />} >
          <Route path="search/:query" element={<Movies movies={movies} />} />
        </Route>
        <Route path="/movies/:id" element={<MovieDetails query={query} movies={movies} />} >
          <Route path="cast" element={<Cast movies={movies} />} />
          <Route path="reviews" element={<Reviews movies={movies} />} />
        </Route>
        <Route path="*" element={<Home options={query} onClick={onClickHome} movies={home} />} />
      </Route>
    </Routes>

  </>
}