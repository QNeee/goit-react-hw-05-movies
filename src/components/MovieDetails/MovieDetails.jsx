import { fetchById } from "components/fetch";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom"
import { GoBackLink, InfoLi, Container, Description, Details, InfoLink, InfoContainer, InfoUl } from "./MovieDetails.styled";
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
        return <Details>
            {query ? <GoBackLink to={`/movies/search/${query}`}>back</GoBackLink> : <GoBackLink to={"/home"}>back</GoBackLink>}
            {movie.map(item => <Container key={item.id}><img src={`${imageUrl}${item.backdrop_path}`} alt={item.name} /><Description><h2>{item.title}</h2>
                <p>{`Score:${movieScore(item.vote_average)}`}</p>
                <p>{`Overview:${item.overview}`}</p>
                <p>{`Genres:${movieGanres(item.genres)}`}</p></Description>
            </Container>)}
            <InfoContainer>
                Aditional Information
                <InfoUl>
                    <InfoLi><InfoLink to={`cast`} >cast</InfoLink></InfoLi>
                    <InfoLi><InfoLink to={`reviews`} >reviews</InfoLink></InfoLi>
                    <Outlet />
                </InfoUl>
            </InfoContainer>
        </Details>

    } else {
        return <div>Nothing<Link to={"/home"}>back</Link></div>
    }

}
MovieDetails.propTypes = {
    query: PropTypes.string.isRequired,
};