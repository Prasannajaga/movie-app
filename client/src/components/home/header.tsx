
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Header() {
  return (
    <>
      <div className="flex flex-row gap-8 mt-4 items-center justify-between">
        <div className="w-[400px]">
          <input
            className="p-4 pl-[3rem ] w-full rounded-full outline-none shadow-lg bg-TextColor placeholder-white caret-white"
            type="text"
            placeholder="Search Movies"
          />
        </div>   
 
        <ul className="menu grid  sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 items-center text-white text-center whitespace-nowrap">
          <li className="menu-item">Movies</li>
          <li className="menu-item">Tv Series</li>
          <li className="menu-item">Animation</li>
          <li className="menu-item">Mystery</li>
          <li className="menu-item">More</li>
          <li className="menu-item !p-0 !w-[40px] h-[40px] !rounded-[50%]">
            <FontAwesomeIcon icon={faBell} style={
              {
                paddingTop : "10px"
              }
            } />
          </li>
          <li className="bg-secondaryColor col-span-2 menu-item">
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
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
