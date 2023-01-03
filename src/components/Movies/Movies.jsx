import PropTypes from "prop-types";
import { Link } from "react-router-dom"
export const Movies = ({ movies }) => {
    return <div>
        <ul>
            {movies.map(item => <li key={item.id}><Link to={`/movies/${item.id}`} >{item.title ? item.title : item.name}</Link></li>)}
        </ul>
    </div>
}
Movies.propTypes = {
    movies: PropTypes.array.isRequired,

};