import { fetchById } from "components/fetch"
import { useState } from "react"
import { Link } from "react-router-dom"


export const Home = ({ movies }) => {
    return <div>
        <ul>
            {movies.map(item => <li key={item.id}><Link to={`/movies/${item.id}`}>{item.title ? item.title : item.name}</Link></li>)}
        </ul>
    </div >
}