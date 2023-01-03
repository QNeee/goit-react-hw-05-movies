import { fetchById } from "components/fetch";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom"
import PropTypes from "prop-types";
const imageUrl = "https://image.tmdb.org/t/p/w300";
export const MovieDetails = ({ query }) => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        fetchById(id).then(({ data }) => {
            setMovie([data])
        });
    }, [id]);

    const movieScore = score => {
        return Math.floor(score * 10) + '%';
    };
    const movieGanres = genres => {
        if (genres === null) return;
        return genres.map(genre => genre.name).join(', ');
    };
    if (movie !== null) {
        return <>
            {query ? <Link to={`/movies/search/${query}`}>back</Link> : <Link to={"/home"}>back</Link>}
            {movie.map(item => <div key={item.id}><img src={`${imageUrl}${item.backdrop_path}`} alt={item.name} /><h2>{item.title}</h2>
                <p>{`Score:${movieScore(item.vote_average)}`}</p>
                <p>{`Overview:${item.overview}`}</p>
                <p>{`Genres:${movieGanres(item.genres)}`}</p>
            </div>)}
            <div>
                Aditional Information
                <Link to={`cast`} >cast</Link>
                <Link to={`reviews`} >reviews</Link>
                <Outlet />
            </div>
        </>

    } else {
        return <div>Nothing<Link to={"/home"}>back</Link></div>
    }

}
MovieDetails.propTypes = {
    query: PropTypes.string.isRequired,
};