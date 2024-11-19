/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Trailer(props : any) {

  const [movies, setMovies] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const data : any[] = props.movies;
    if(data){
      const trailer = data.filter((_x :any, index:number) => index >= 80).filter((_x,index) => index < 4);
      setMovies(trailer);
      console.log("Updated " , trailer);
      
    }
  } ,[props.movies])

  function onRoute(id : string | number){
    navigate(`movie/${id}`)
  }


  return (
    <>
      <div className="bg-secondaryColor rounded-2xl p-5 h-[465px] overflow-hidden overflow-y-scroll scrollBarContent">
 
          {/* <div className="overflow-hidden p-5"> */}

              <h2 className="text-white font-semibold mb-4">New Trailer</h2>

              <div className="flex flex-col gap-4">
                {movies && movies.map((item:any , index:number)=>(
                  <div key={index}>
                      <img 
                        onClick={() => onRoute(item.id)}
                        className="max-w-full h-auto rounded-lg aspect-video object-cover object-top"
                        alt="Nothing"
                        src={item.image}
                      />
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
