/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesById } from "../authService/movieService";

function MovieDetails() {
  const [data, setData] = useState<any>({});
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovies() {
      await getMoviesById(Number(movieId)).then((x) => {
        setData(x.data);
      });
    }

    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function formateDate(date : string){
    const newDate = new Date(date);
    return newDate.getUTCFullYear();
  }

  return ( 
    <> 
      <div className="container mx-auto">
        <div className="flex gap-2">

          {data.image != null && 
            <div className="relative">
                <img src={data.image} className="w-full rounded-[25px] p-4 img-full from-top border-none"/>
            </div>
          }

          <div className="p-4 slideInLeft">
              <span className="flex items-center gap-2">
                  <h3 className="text-2xl text-white font-semibold tracking-wide">{data.title}</h3>
                  <small className="font-bold text-white">{formateDate(data.release_date)}</small>
              </span>
          </div>

        </div>
      </div>
    </>
  );
}

export default MovieDetails;
