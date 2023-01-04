import PropTypes from "prop-types";
import { Link } from "react-router-dom"
const Movies = ({ movies }) => {

    if (movies !== null) {
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
export default Movies;