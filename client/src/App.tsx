/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./App.css";
import { getMovies } from "./components/authService/movieService";
import Header from "./components/home/header";
import Trailer from "./components/home/trailer";
import Watching from "./components/home/watching";
import Movies from "./components/movies/movies";
 
function App() {

  const [movies, setMovies] = useState<any>([]); 

  useEffect(() => {
    async function getMoviesData() {
      await getMovies().then((x) => {
        setMovies(x.data.results);
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

          <div className="grid grid-cols-subgrid gap-10 mb-5">
            {/* <div className="col-start-1"> */}
              <Trailer movies={movies}/>
            {/* </div> */}
            {/* <div className="col-start-1"> */}
              <Watching movies={movies}/>
            {/* </div> */}
          </div>

          <div className="col-span-3 mb-5">
            <Movies props={movies} />
          </div>


        </div>

      </div>
    </>
  );
}

export default App;
