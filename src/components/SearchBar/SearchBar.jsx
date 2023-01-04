import PropTypes from "prop-types";
import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { Form, Button, Input } from "./SearchBar.styled";

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
    return <div><Form onSubmit={handleSubmit}>
        <Input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={onChange}
        />
        <Button type="submit">Search</Button>
    </Form><Outlet /></div>
}
SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired
};