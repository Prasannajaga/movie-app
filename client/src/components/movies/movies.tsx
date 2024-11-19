/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { faAngleLeft, faAngleRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import SvgTemplate from "../Service/svg";
import { useNavigate } from "react-router-dom";

function Movies(props: any) {
  const [randomMovies, setRandomMovies] = useState<any>([]);
  const [mightLikeMovies, setMightLikeMovies] = useState<any>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const data: any[] = props.props;
    if (data) {
      const rand: any = data.filter((_x: any, index: number) => index <= 6);
      if (rand) {
        rand.forEach((element: any, index: number) => {
          element.active = false;
          if (index === 0) {
            element.active = true;
          }
        });
        setRandomMovies(rand);
        console.log("Random Movies", randomMovies);
      }

      const youMightLike = data
        .filter((_x: any, index: number) => index > 40)
        .filter((_x, index) => index < 4);
      if (youMightLike) {
        setMightLikeMovies(youMightLike);
      }
    }
  }, [props.props]);

  function forwardMovie(id: number) {
    if (randomMovies) {
      const t = randomMovies.map((element: any) => {
        element.active = element.id === id ? true : false;
        return element;
      });
      setRandomMovies(t); 
    }
  }

  function onRoute(id : string | number){
    navigate(`movie/${id}`)
  }


  return (
    <>
      <section className="container">
        <div className="flex flex-col gap-1">
          <div className="container">
            {randomMovies.map((item: any, index: number) => (
              <div 
                key={index}
                className={` slide-body w-fit relative overflow-hidden ${
                  item.active ? "active-slide" : "hidden"
                } `} 
              >
                <div className="cardMovies max-w-full overflow-hidden rounded-lg image-body relative">
                  <img
                    className="mask-it max-w-full w-[950px] h-auto aspect-ratio-wide hover:scale-105 transition-all duration-300"
                    alt="Nothing"
                    src={item.image} 
                    onClick={() => onRoute(item.id)}
                  />  
  
                  <div className="flex flex-col gap-2 absolute bottom-[1px] left-[1px] p-8 text-white ">
 
                    <div className="flex gap-2">
                      {item.genres.map((data: any) => (
                        <span className="bg-lightG p-2 py-1 rounded-xl text-sm font-normal">
                          {data}
                        </span>  
                      ))} 
                    </div>

                    <div className="flex gap-2">
                      <h4 className="text-xl font-semibold">{item.title}</h4>
                       <a className="bg-lightG px-1 py-0 w-fit inline-flex gap-1 items-center rounded-[11px]" href={item.imdb.url} target="_blank">
                         <p className="text-[12px] font-semibold ml-1">{item.imdb.users_rating}</p>
                         <SvgTemplate  data={{
                          type :"IMDB" , width : "15" , height : "15"
                         }}></SvgTemplate>
                       </a>
                    </div>

                    <div className="flex gap-2">
                      <button className="group/item1 play-btn">
                        <span className="play-body group-hover/item1:text-black" data-content='Watch'>
                          <FontAwesomeIcon
                            icon={faPlay} 
                            size="sm"
                          />
                          Watch
                        </span>
                      </button>
                      <button className="group/item2 play-btn">
                        <span className="play-body group-hover/item2:text-black" data-content='Download'>
                          <FontAwesomeIcon
                            icon={faDownload}
                            size="sm" 
                          />
                          Download
                        </span>
                      </button>
                    </div>  
                    

                  </div>
                </div>

                <div className="absolute flex right-0 gap-6 bottom-[-20px] p-8 z-10">
                  <div className="cursor-pointer img-svg">
                    <p
                      className="text-center mt-2"
                      onClick={() =>
                        forwardMovie(
                          randomMovies[index - 1] != undefined ?
                            randomMovies[index - 1].id : randomMovies[randomMovies.length - 1].id
                        )
                      }
                    >
                      <FontAwesomeIcon
                        icon={faAngleLeft}
                        size="lg"
                        color="lightgray"
                      />
                    </p>
                  </div>
                  <div className="cursor-pointer img-svg">
                    <p
                      className="text-center mt-2"
                      onClick={() =>
                        forwardMovie(
                          randomMovies[index + 1] != undefined ?
                            randomMovies[index + 1].id : randomMovies[0].id
                        )
                      }
                    >
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        size="lg"
                        color="lightgray"
                      />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="container flex justify-between my-4 font-semibold text-xl text-white">
            <p>You might like</p>
            <span className="text-sm p-3 pt-1 pb-1 bg-secondaryColor rounded-full">
              See all
            </span>
          </div> 
 
          <div className="container"> 
            <div className="flex gap-4">
              {mightLikeMovies.map((item: any, index: number) => (
                <>
                  <div
                    key={index}
                    className="cardMovies max-w-full overflow-hidden rounded-lg"
                  >
                    <img
                      className="mask-it max-w-full w-[300px] h-[300px] block hover:scale-105 transition-all duration-300"
                      alt="Nothing"
                      src={item.image}
                      onClick={() => onRoute(item.id)}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Movies;
