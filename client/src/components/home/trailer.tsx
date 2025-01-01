/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUpcomingMovies } from "../authService/movieService";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Trailer() {

  const [movies, setMovies] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(()=>{
 
    async function getNewMovies(){

          await getUpcomingMovies().then((x) =>{
              const data  = x.data.movies;
              if(data){
                 setMovies(data.filter((x:any) => x.poster != null));                 
              }
          })

    }

    getNewMovies();

  } ,[])

  function onRoute(id : string | number){
    navigate(`movie/${id}`)
  }


  return (
    <>
      <div className="h-auto lg:h-[29rem] xl:h-[35rem] 2xl:h-[35rem] bg-secondaryColor rounded-2xl p-5 overflow-hidden overflow-y-scroll scrollBarContent">
 
          {/* <div className="overflow-hidden p-5"> */}

              <h2 className="text-white font-semibold mb-4">Trending</h2>

              <div className="flex flex-col gap-4">
                {movies && movies.map((item:any , index:number)=>(
                  <div className="relative" key={index}>
                      <img 
                        onClick={() => onRoute(item.id)}
                        className="max-w-full w-full h-[10rem] rounded-lg object-fill"
                        alt="Nothing"
                        src={item.poster}
                      />
                      <div className="trailer-title flex justify-between items-center">
                          <span className="font-semibold !w-auto text-ellips">{item.title}</span>
                            <span className="play-trailer bg-lg-Primary-3">
                              <FontAwesomeIcon
                                icon={faPlay}
                                size="sm"
                              />
                            </span>
                      </div>
                  </div>
                ))
                }
              </div>

          {/* </div> */}
        
      </div>
    </>
  );
}

export default Trailer;
