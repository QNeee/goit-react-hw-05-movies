
import { useEffect, useState } from "react"
import { fetchByName, fetchTrendings } from "./fetch";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Movies } from "./Movies/Movies";
import { SearchBar } from "./SearchBar/SearchBar";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Review/Reviews";
import { Layout } from "./Layout/Layout";
export const App = () => {
  // const [app, setApp] = useState({ home: [], movies: [], movie: [] });
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
        <Route path="home" element={<Home options={query} onClick={onClickHome} movies={home} />} />
        <Route path="movies" element={<SearchBar onSubmit={handleSubmit} />} >
          <Route path="search/:query" element={<Movies movies={movies} />} />
        </Route>
        <Route path="/movies/:id" element={<MovieDetails query={query} movies={movies} />} >
          <Route path="cast" element={<Cast movies={movies} />} />
          <Route path="reviews" element={<Reviews movies={movies} />} />
        </Route>
      </Route>
    </Routes>

  </>
}