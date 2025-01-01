/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getGenreCollections } from "../authService/movieService";
// import SvgTemplate from "../Service/svg"; 
import { useNavigate } from "react-router-dom";

 


function Header() {

  const [genresList , setGenres] = useState<any[]>();

  useEffect(() =>{
    async function getGenreList() {
        await getGenreCollections().then((x) => {
          setGenres(Object.values(x.data.genres));
        });
      }
  
      getGenreList();
  },[])

  const navigate = useNavigate();

  function route(d?:string){
    navigate(`/movies?genre=${d}`)
  }



  return (
    <>
      <div className="flex flex-row gap-8 mt-4 items-center justify-between h-20">
  
        <div className="hidden md:hidden sm:hidden lg:block xl:block"> 
          <img className="h-16 w-[13rem] rounded-md" src="src/assets/flickfind.svg" alt="" />
        </div>
        
        <ul className="hidden md:hidden sm:hidden lg:flex xl:flex w-full overflow-auto scrollBarContent gap-4 items-center text-white text-center whitespace-nowrap">
          <li className="menu-item" onClick={() => route()} >All Movies</li>
          {genresList && genresList.map((x:any , index : number) =>(
            <li onClick={() => route(x)} className="menu-item" key={index}>{x}</li>
          ))}
          {/* <li className="menu-item">Tv Series</li> */}
          {/* <li className="menu-item">Animation</li> */}
          {/* <li className="menu-item">Mystery</li> */}
          {/* <li className="menu-item">More</li> */}
          {/* <li className="menu-item !p-0 !w-[40px] h-[40px] !rounded-[50%]">
            <FontAwesomeIcon icon={faBell} style={
              {
                paddingTop : "10px"
              }
            } />
          </li> */}
          {/* <li className="bg-secondaryColor col-span-2 menu-item">
            <div className="flex gap-2 ">
              <img
                className="w-10 h-auto rounded-full"
                src="https://i.pravatar.cc/100"
                alt=""
              />
              <span className="text-start flex flex-col gap-0 ">
                <h3 className="text-base">Prasanna</h3>
                <span className="text-xs">@Prasanna.com</span>
              </span>
            </div>
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default Header;
