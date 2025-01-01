/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./App.css";
import { getMovies} from "./components/authService/movieService";
import Header from "./components/home/header";
import Trailer from "./components/home/trailer";
import Watching from "./components/home/watching"; 
import HomeMovies from "./components/movies/homeMovies";
 
function App() {

  const [movies, setMovies] = useState<any>([]); 

  useEffect(() => {
    async function getMoviesData() {
      await getMovies().then((x) => {
        setMovies(x.data.movies.filter((c:any) => c.poster != undefined && c.poster != null && c.poster != ""));
        const alldata : Array<any> = x.data.results;
        if(alldata){
          // alldata.forEach(x =>{
            // saveMovies(x);
          // });
        }
      }); 
    }

    getMoviesData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return ( 
    <>
      <div className="container xl:mx-auto lg:mx-auto md:mx-5 px-4">
        <Header />
 
        <div className="grid grid-cols-4 gap-10 mt-5 mb-5">

          <div className="flex-col gap-8 lg:flex xl:flex mb-5 md:hidden sm:hidden hidden">
            {/* <div className="col-start-1"> */}
              <Trailer/>
            {/* </div> */}
            {/* <div className="col-start-1"> */}
              <Watching movies={movies}/>
            {/* </div> */}
          </div>

          <div className="md:col-start-1 col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-3 xl:col-span-3 mb-5" >
            <HomeMovies props={movies} />
          </div>


        </div>

      </div>

      <div className="container xl:mx-auto lg:mx-auto md:mx-5 px-4 text-center text-white">
          powered By <a className="underline" target="_blank" href="https://www.betaseries.com/en/"> betaSeries </a>
      </div>
    </>
  );
}

export default App;
