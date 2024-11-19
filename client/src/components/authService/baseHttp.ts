import axios from "axios";

// const KEY = 'dddf94a2';
// const URL = `http://www.omdbapi.com/?apikey=${KEY}&page=1`;
export const MOVIEURL = 'https://whatson-api.onrender.com/?limit=100';

export const baseHttp =  axios.create({
    baseURL : MOVIEURL, 
}) 