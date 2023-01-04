import { fetchById } from "components/fetch";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useParams } from "react-router-dom"
import { GoBackLink, InfoLi, Container, Description, Details, InfoLink, InfoContainer, InfoUl } from "./MovieDetails.styled";
import PropTypes from "prop-types";
const imageUrl = "https://image.tmdb.org/t/p/w300";
const MovieDetails = ({ query }) => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        fetchById(id).then(({ data }) => {
            setMovie([data])
        }).catch(eror => {
            setMovie(null)
        });
    }, [id]);

    const movieScore = score => {
        return Math.floor(score * 10) + '%';
    };
    const movieGanres = genres => {
        if (genres === null) return;
        return genres.map(genre => genre.name).join(', ');
    }
    if (movie !== null) {
        return <Details>
            {query ? <GoBackLink to={`/movies/search/${query}`}>back</GoBackLink> : <GoBackLink to={"/"}>back</GoBackLink>}
            {movie.map(item => <Container key={item.id}><img src={`${imageUrl}${item.backdrop_path}`} alt={item.name} width="600" /><Description><h2>{item.title} ({item.release_date})</h2>
                <p>{`User Score:${movieScore(item.vote_average)}`}</p>
                <div><h3>OverView:</h3>{item.overview}</div>
                <div><h3>Genres:</h3>{movieGanres(item.genres)}</div></Description>
            </Container>)}
            <InfoContainer >
                Aditional Information
                <InfoUl>
                    <InfoLi><InfoLink to={`cast`} >cast</InfoLink></InfoLi>
                    <InfoLi><InfoLink to={`reviews`} >reviews</InfoLink></InfoLi>
                    <Outlet />
                </InfoUl>
            </InfoContainer>

        </Details >

    }
}
MovieDetails.propTypes = {
    query: PropTypes.string.isRequired,
};
export default MovieDetails;