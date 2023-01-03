import { fetchById } from "components/fetch"
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom"
export const Cast = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        fetchById(id + "/credits").then(({ data }) => setMovie(data));
    }, [id])
    if (movie !== null) {
        console.log(movie.cast);
        return movie.cast.map(item => <div key={item.id}><p>{item.name}</p>{item.character}<p></p></div>)
    }
}