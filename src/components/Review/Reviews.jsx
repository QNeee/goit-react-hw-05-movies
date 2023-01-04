import { fetchById } from "components/fetch"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ReviewItem, ReviewAuthor, ReviewContent } from "./Reviews.styled";
const Reviews = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        fetchById(id + "/reviews").then(({ data }) => setMovie(data));
    }, [id])
    if (movie !== null) {
        return <div>
            {movie.results.length > 0 ? <ul>
                {movie.results.map(item => <ReviewItem key={item.id}><ReviewAuthor>{item.author}</ReviewAuthor><ReviewContent>{item.content}</ReviewContent></ReviewItem>)}
            </ul> : <div>No reviews </div>}
        </div>
    }
}
export default Reviews;