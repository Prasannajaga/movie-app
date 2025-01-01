/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getCastByMovies, getMoviesById, getSimiliarMovies } from "../authService/movieService"; 
import Unknown_user from  "../../assets/unknown.png"
import MovieCard from "./movieCard"; 
import SvgTemplate from "../Service/svg";

 
function MovieDetails() {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<any>(true);
  const [castMembers, setCast] = useState<any[]>([]);
  const [similiarMovies, setSimiliarMovies] = useState<any[]>([]);
  const { movieId } = useParams(); 
  const location = useLocation(); 


  useEffect(() => {
    setLoading(true);
    async function getMovies() {
      await getMoviesById(Number(movieId)).then((x) => {
        setData(x.data.movie);
        getCastMember();
        getSimiliarData(x.data.movie.genres ? x.data.movie.genres.join(',') : '')
      });
      setLoading(false)
    }

    getMovies(); 

    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });     

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ movieId , location.state?.id]);  

  async function getCastMember(){
    await getCastByMovies(movieId || "").then((x)=>{
      setCast(x.data.characters);
    })
  }

  async function getSimiliarData(d:string){
    await getSimiliarMovies(d).then((x)=>{
      setSimiliarMovies(x.data.movies);
    })
  }

  function formateDate(date: string) {
    const newDate = new Date(date);
    return newDate.getUTCFullYear();
  } 

  return (
    <>
      {!loading && 
        <div className="container-xl md:mx-auto lg:mx-2 xl:mx-4">
          <div className="grid grid-cols-1"> 

            <section className="flex h-[15rem] sm:h-[25rem] md:h-[35rem] mx-2 ">
              {data.poster != null && (
                // <section className="upto-screen w-[90rem]">
                  <img
                    src={data.poster}
                    className="hidden sm:hidden md:hidden lg:hidden xl:block max-w-full h-auto rounded-[25px] p-4 from-top border-none"
                  />
                // </section>
              )}

              {data?.trailer != undefined ? (
              <article className="w-full h-full p-4">
                <iframe
                  style={{ width: "100%", height: "100%" }}
                  src={"https://www.youtube.com/embed/" + data?.trailer}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </article>
              ) : (
                <div className="flex flex-col m-4 justify-center items-center w-full text-center bg-secondaryColor rounded-md">
                  <SvgTemplate data="YOUTUBE" height="100" width="100"></SvgTemplate>
                  <span className="text-2xl font-semibold ">No Trailer Found</span>
                </div>
              )}
            </section>

            <section id="movie-body" className="mx-2">
              <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row gap-4 p-4 h-auto">
                <div className="detailed-bdy flex flex-col gap-2 text-white basis-[65%] scrollBarContent">
                  <div className="flex flex-col gap-1">
                    <div className="p-2 pl-0 slideInLeft">
                      <span className="flex items-center gap-2">
                        <h3 className="text-2xl text-white font-semibold tracking-wide hover:tracking-widest transition-all duration-300">
                          {data.title}
                        </h3> 
                        <small className="font-bold text-white">
                          {formateDate(data.release_date)}
                        </small>
                      </span>
                      <h5>{data.tagline!=null ? `"${data.tagline}"` : null}</h5>
                    </div>
                    <div className="slideInLeft pl-2">
                      <div className="flex gap-2">
                        {data.genres != null &&
                          data.genres.map((gData: any) => {
                            return (
                              <span className="genres-bdy" key={gData}>
                                {gData}
                              </span>
                            );
                          })}
                      </div>
                    </div>
                  </div> 
                  <div className="whitespace-break-spaces slideInLeft pl-2">
                        {data.synopsis}
                  </div>

                  {castMembers?.length > 0 ? 
                      <div className="crew-body-responsive">
                        <h2 className="detail-title">Cast</h2>
                        <div className="crew-body scrollBarContent">
                          {castMembers.map((x:any , index : number) =>(
                              <div key={index} className="flex gap-2">
                                    <div className="flex flex-col gap-2 items-center">
                                      <img className="img-svg !w-20 !h-20 mask-it" src={x.picture  === null ? Unknown_user : x.picture}   />
                                      <span className="profileName ">{x.name}</span>
                                      <span className="profileName ">{x.actor}</span>
                                    </div> 
                              </div>
                          ))}
                        </div>
                      </div>
                      : null 
                      } 
                      
                      {data?.crew?.directors?.length > 0 || data?.crew?.producers?.length > 0?
                      <div className="crew-body-responsive">
                        <h2 className="detail-title">Producers & Directors</h2>
                        <div className="crew-body scrollBarContent">
                            {data?.crew?.directors.concat(data?.crew?.producers?.length > 0 ? data?.crew?.producers : []).map((x:any , index : number) =>(
                                <div key={index} className="flex gap-2">
                                      <div className="flex flex-col gap-2 items-center">
                                        <img className="img-svg !w-20 !h-20 mask-it" src={x.picture  === null ? Unknown_user : x.picture} alt="not found" />
                                        <span className="profileName ">{x.name}</span>
                                      </div>
                                </div>
                            ))}
                          </div>
                      </div>
                      : null
                    }

                    {/* {data?.crew?.producers?.length > 0 ?  
                    <div className="w-[40rem] px-4">
                      <h2 className="text-lg text-white font-semibold mb-3">Producers</h2>
                      <div className="crew-body scrollBarContent">
                        {data?.crew?.producers.map((x:any , index : number) =>(
                            <div key={index} className="flex gap-2">
                                  <div className="flex flex-col gap-2 items-center">
                                    <img className="img-svg !w-20 !h-20 mask-it" src={x.picture  === null ? Unknown_user : x.picture} alt="not found" />
                                    <span className="profileName">{x.name}</span>
                                  </div>
                            </div>
                        ))}
                      </div>
                    </div>
                    : null
                    } */}
                  

                </div> 

                <div className="detailed-bdy h-[44rem] scrollBarContent basis-[35%]">
                    <h2 className="text-white text-xl mb-2 font-semibold">Similiar Movies</h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
                      {similiarMovies && similiarMovies.map((item: any , i : number) => (
                        <>
                          <MovieCard  movie={item} index={i}></MovieCard> 
                        </>
                      ))}
                    </div>
                </div>
              </div>
            </section>


          </div>
        </div>
      }
    </>
  );
}

export default MovieDetails;
