const APIKEY = process.env.REACT_APP_PEXEL_KEY

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: APIKEY,
};

const API_URL = 'https://api.pexels.com/v1/';
const SEARCH_URL = 'search?query=';
const PER_PAGE = '&per_page=20';


export const pictureSearch = (searchTerm) => {
    return fetch(`${API_URL}${SEARCH_URL}${searchTerm}${PER_PAGE}`, {
        method: "GET",
        headers: headers
    });
}