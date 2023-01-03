import PropTypes from "prop-types";
import { Link } from "react-router-dom"


export const Home = ({ movies, options, onClick }) => {
    return <div>
        <ul>
            {movies.map(item => <li key={item.id}><Link onClick={() => onClick(options)} to={`/movies/${item.id}`}>{item.title ? item.title : item.name}</Link></li>)}
        </ul>
    </div >
}
Home.propTypes = {
    movies: PropTypes.array.isRequired,
    options: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};