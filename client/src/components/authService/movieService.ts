import { openDB } from 'idb';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseHttp } from "./baseHttp"

const advancedSearch  = (limit :string = "100") => `https://api.betaseries.com/search/movies?locale=en&limit=${limit}&`;

export const getAllMovies = async (genres : string) => {
 const URL = advancedSearch("100") + `genres=${genres === undefined ? "" :genres}`
 const response  = await baseHttp.get(URL);  
 return response;
}

export const getSimiliarMovies = async (genres : string) => {
 const URL = advancedSearch("20") + `${genres === undefined ? "" : 'genres=' + genres}`
 const response  = await baseHttp.get(URL);  
 return response;
}

export const getCastByMovies = async (movieId : string) => {
 const URL = `characters?id=${movieId}&locale=en`
 const response  = await baseHttp.get(URL);  
 return response;
}

export const getMovies = async () => {
 const URL = 'random?locale=en&nb=20'
 const response  = await baseHttp.get(URL);  
 return response;
}

export const searchMovies = async (genres : string, searchTerm : string) => {
 const URL = advancedSearch + `genres=${genres === undefined ? "" : genres}&text=${searchTerm}`
 const response  = await baseHttp.get(URL);  
 return response;
}

export const getUpcomingMovies = async () => {
 const URL = advancedSearch("10") + "releases=2022,2024,2025"
 const response  = await baseHttp.get(URL);  
 return response;
}
 
export const getMoviesById = async (id : number) => { 
 const movieURL = `/movie?id=${id}&locale=en`
 const response  = await baseHttp.get(movieURL); 
 return response;
}

export const getGenreCollections = async () => { 
 const movieURL = `/genres?locale=en`
 const response  = await baseHttp.get(movieURL); 
 return response;
}

export const saveMovies = async (datas : Record<string , any>) => {
 const response  = await baseHttp.post("http://localhost:8080/movie/save" , datas);  
 return response;
}


export async function initDB () {
    const db = await openDB('movieDb', 1, {
      upgrade(db) {
        db.createObjectStore('movie', { keyPath: 'id' });
      },
   });
  return db;
  }



