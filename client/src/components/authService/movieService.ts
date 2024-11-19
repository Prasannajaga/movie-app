import { baseHttp, MOVIEURL } from "./baseHttp"



export const getMovies = async () => {
    const response  = await baseHttp.get('');    
    return response;
}

export const getMoviesById = async (id : number) => {
    const data = MOVIEURL.split("?");
    const movieURL = data[0] + `movie/${id}`;
    const response  = await baseHttp.get(movieURL);    
    return response;
}






