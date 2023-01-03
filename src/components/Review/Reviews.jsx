import { fetchById } from "components/fetch"
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom"
export const Reviews = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        fetchById(id + "/reviews").then(({ data }) => setMovie(data));
    }, [id])
    if (movie !== null) {
        return <div>
            <ul>
                {movie.results.map(item => <li key={item.id}>{item.author}:{item.content}</li>)}
            </ul>
        </div>
    } else {
        return <div></div>
    }
}