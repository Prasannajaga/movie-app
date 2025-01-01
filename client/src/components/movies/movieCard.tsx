/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function MovieCard(data :  any) {


    const [movie , setMovie] = useState<any>({});

    useEffect(()=>{
        setMovie(data.movie); 
    }, [])

    const navigate = useNavigate();

    function onRoute(id : string | number){
        navigate(`/movie/${id}` , {})
    }

    return (
        <>
         <div key={data.index} className="relative cardMovies max-w-full overflow-hidden rounded-lg">
                <img
                    className="mask-it max-w-full w-full h-auto md:h-72 lg:h-72"
                    alt="Nothing" 
                    src={movie.poster}
                    onClick={() => onRoute(movie.id)}
                />
                <div className="absolute bottom-2 left-3">
                    <span className="text-white font-bold text-ellips">{movie.title} <small>({new Date(movie.release_date).getFullYear()})</small> </span>
                </div>
            </div>
        </>
    )
}



export default MovieCard;