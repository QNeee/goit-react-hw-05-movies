import PropTypes from "prop-types";
import { Link } from "react-router-dom"
export const Movies = ({ movies, options }) => {
    if (movies.length > 0) {
        return <div>
            <ul>
                {movies.map(item => <li key={item.id}><Link to={`/movies/${item.id}`} >{item.title ? item.title : item.name}</Link></li>)}
            </ul>
        </div>
    } else {
        return <div>No data</div>
    }
}
Movies.propTypes = {
    movies: PropTypes.array.isRequired,

};