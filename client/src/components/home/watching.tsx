/* eslint-disable @typescript-eslint/no-explicit-any */
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initDB } from "../authService/movieService";

function Watching(props : any) {
  
  const [movies, setMovies] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(()=>{
       getMovies();
  } ,[props.movies])

  function onRoute(id : string | number){
    navigate(`movie/${id}`)
  }

  async function getMovies(){
    const db = await initDB();
    if(db){
      const response = await db.getAll('movie'); 
      setMovies(response);
    }
  }

  return (  
    <> 
      <div className="h-auto md:h-40 lg:h-40 xl:h-40 min-h-80 bg-secondaryColor rounded-2xl p-5 overflow-hidden overflow-y-scroll scrollBarContent">
        {/* <div className="overflow-hidden p-5"> */}

        <h2 className="text-white font-semibold mb-4">Continue watching</h2>
 
        <div className="flex flex-col gap-4 ">  
          {movies &&
            movies.map((item: any, index: number) => (
              <div key={index} className="flex gap-2 items-center justify-between">
                <span >
                  <img
                    onClick={() => onRoute(item.id)}
                    className="max-w-full w-12 h-12 rounded-lg object-fill object-center"
                    alt="Nothing"
                    src={item.poster}
                  />
                </span>   

                <span className="truncate w-32 text-white">{item.title}</span>

                <div className="w-[30px] h-[30px] bg-svgColor rounded-full">
                  <p className="text-center mt-[2.5px]">
                    <FontAwesomeIcon
                            icon={faPlay}
                            size="sm"
                            color="white"
                          /> 
                  </p>
                </div>

              </div>
            ))}
        </div>

        {/* </div> */}
      </div>
    </>
  );
}

export default Watching;
