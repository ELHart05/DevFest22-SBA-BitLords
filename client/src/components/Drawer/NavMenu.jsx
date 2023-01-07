import { Link } from "react-router-dom";
import icons from './assets/icons.svg';

const NavMenu = (props) => {
    const location = props.location;
    const pages = props.pages;
    return (  
        <div className="space-y-4">
            <h3 className="pl-7 text-mainGrey uppercase">{props.title}</h3>
            <ul className="space-y-2 font-bold">
                {pages.map((element) => (
                    <Link key={element.link} to={element.link} className={`transition duration-300 py-4 pr-8 pl-5 flex gap-4 rounded-2xl items-center hover:opacity-60 ${element.link===location || element.link+'/alphabit' === location || element.link+'/ingenioums' === location|| element.link+'/gdg-sba' === location|| element.link+'/gdsc' === location     ? "stroke-white text-white bg-blue-500" : "stroke-black"}`}>
                        <svg className="aspect-square w-[20px]">
                            <use xlinkHref={icons+'#'+element.icon}></use>
                        </svg>
                        {element.title}
                    </Link>
                ))}
            </ul>
        </div>
    );
}
 
export default NavMenu;