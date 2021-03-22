import axios from 'axios';


// appending the base url to the fetch

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;