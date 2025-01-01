/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { getAllMovies, searchMovies } from "../authService/movieService";
import MovieCard from "./movieCard";
import "../../assets/styles/skeleton.css"
import { debounce } from "lodash";
import SvgTemplate from "../Service/svg";
import { useSearchParams } from "react-router-dom";
 

function Movies() {


  const [movie , setMovies] = useState<any[]>([]);
  const [searchData , setSearchVal] = useState<string>("");
  const [genre , setGenres] = useState<string>("");
  const [loading , setLoading] = useState<boolean>(true); 
  const [params] = useSearchParams();


  useEffect(()=>{ 
    if(searchData && searchData.length > 0){
      searchQuery(searchData);
    }
    else{
      getAllMovieList();
    }
  }, []) 
  
  async function getAllMovieList() {
       const id = params.get('genre') === undefined ? "" : params.get("genre");
       setGenres(id || "");

       await getAllMovies(id || "").then((x) => {
         setMovies(x.data.movies.filter((c:any) => (c.poster !=null && c.poster.length > 0)));
       });
       setTimeout(() => {
         setLoading(false); 
       }, 1000);
   }

    function loadTimes(d:number){
      return new Array(d).fill("");
    }

    const searchQuery = useCallback(debounce((d : string) => performSearch(d) , 300) , []);

    function searchTerm(e: React.ChangeEvent<HTMLInputElement> | any){
      const val = e.target.value;
      if(searchData != val){
        searchQuery(val);
       }
    }
    
    async function performSearch(d:string){
      setLoading(true);
      if(d.trim().length > 0){
        setSearchVal(d); 
        const response = await searchMovies(genre ,d); 
        setMovies(response.data.movies.filter((c:any) => (c.poster !=null && c.poster.length > 0)))
      }else{
        await getAllMovieList();
      }
      setLoading(false); 
    }

    return (
        <>
            <div className="container xl:mx-auto lg:mx-auto md:mx-5 p-4">

              <div className="px-10 mb-10 mt-4 w-full">
                <input onKeyUp={searchTerm}   
                    className="p-4 pl-[3rem] w-full rounded-full outline-none shadow-lg bg-TextColor placeholder-white caret-white"
                    type="text" 
                    placeholder="Search Movies "/>
              </div>    
             
              <div className="flex flex-wrap gap-10 justify-center">
                  {loading && loadTimes(8).map((x:any)=>(
                    <div className="skeleton-loader" key={x}> 
                      <div className="skeleton skeleton-body !w-60 !h-96"></div>
                    </div>
                  ))}
              </div>
              
                {movie.length > 0 ? 
                    <div className="flex flex-wrap gap-10 justify-center"> 
                        {movie.map((x : any , index : number)=> (
                        <MovieCard  movie={x} index={index}></MovieCard>
                        ))}
                    </div>
                    : 
                    <>
                      {!loading && <div className="flex flex-col items-center">
                        <SvgTemplate data="SEARCH" width="200"></SvgTemplate>
                        <span className="italic">Oops! It seems the movie you're looking for is still in production. Try searching for another title.</span>
                      </div>
                      }
                    </> 
                }

            </div>

            {/* <div className="skeleton-loader">
            <div className="skeleton skeleton-header"></div>
            <div className="skeleton skeleton-footer"></div>
           </div> */}

        </>
    )
}



export default Movies;