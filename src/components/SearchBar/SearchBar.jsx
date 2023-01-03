import PropTypes from "prop-types";
import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"


export const SearchBar = ({ onSubmit }) => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('')
    const onChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const userInput = inputValue.trim();
        if (!userInput) return;
        onSubmit(userInput);
        navigate(`/movies/search/${userInput}`);
    }
    return <div><form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={onChange}
        />
        <button type="submit">add</button>
    </form><Outlet /></div>
}
SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired
};