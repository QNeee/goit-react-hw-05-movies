import axios from "axios";
const API_KEY = '54aa9afe1c6bda10261f338957536c79';
const URL = 'https://api.themoviedb.org/3/trending/all/day';
const URL_SEARCH_BY_NAME = 'https://api.themoviedb.org/3/search/movie';
const URL_SEARCH_BY_ID = 'https://api.themoviedb.org/3/movie';
export async function fetchByName(name) {
    axios.defaults.params = {
        api_key: API_KEY,
        language: 'en-US',
        query: `${name}`,
    };
    try {
        const response = await axios.get(
            `${URL_SEARCH_BY_NAME}`
        );
        return response;
    } catch (error) {
        console.log(error);
    }
}
export async function fetchById(id) {
    axios.defaults.params = {
        api_key: API_KEY,
        language: 'en-US',
    };
    try {
        const response = await axios.get(
            `${URL_SEARCH_BY_ID}/${id}`
        );
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchTrendings() {
    axios.defaults.params = {
        api_key: API_KEY,
        language: 'en-US',
    };
    try {
        const response = await axios.get(
            `${URL}`
        );
        return response;
    } catch (error) {
        console.log(error);
    }
}