import { fetchById } from "components/fetch"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Container } from "./Cast.styled";
const imageUrl = "https://image.tmdb.org/t/p/w300";
const defaultUrl = "https://cdn-0001.qstv.on.epicgames.com/tFaisIxoSaCVPpPxIm/image/screen_comp.jpeg"
const Cast = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        fetchById(id + "/credits").then(({ data }) => setMovie(data));
    }, [id])
    if (movie !== null) {
        return movie.cast.map(item => <Container key={item.id}><img src={item.profile_path ? `${imageUrl}${item.profile_path}` : `${defaultUrl}`} width="100" alt={item.name} /><p>{item.name}</p><p>Character:{item.character}</p></Container>)
    }
}
export default Cast;