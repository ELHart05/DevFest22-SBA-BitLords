import { EventCard } from "./EventCard";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { WorkshopCard } from "./WorkshopCard";
import axios from "axios";

export const Clubs = () => {
    const location = useLocation().pathname;
    const [select, setSelect] = useState(true)
    const [events, setEvents] = useState([])
    const [workshops, setWorkshops] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/events/'
        ).then((e) => {
            let temp = e.data.filter((element) => {
                return element.isAccepted
            })
            setEvents(temp)

        }).catch((e) => {
            console.log(e.response.data);
        })

        axios.get('http://localhost:5000/api/workshops/'
        ).then((e) => {
            let temp2 = e.data.filter((element) => {
                return element.isAccepted
            })
            setWorkshops(temp2)

        }).catch((e) => {
            console.log(e.response.data);
        })
    })

    return (
        <section className="container mx-auto px-8 pt-12">
            <ul className="flex gap-[8vw] pb-8 ml-8">
                <li className={`${select ? "font-bold text-white bg-blue-400 px-6 py-3 rounded-2xl hover:cursor-pointer" : "font-bold  bg-gray-200 text-gray-500 px-6 py-3 rounded-2xl hover:cursor-pointer"}`}
                    onClick={() => {
                        setSelect(true)
                    }}
                >Events</li>
                <li className={`${!select ? "font-bold text-white bg-blue-400 px-6 py-3 rounded-2xl hover:cursor-pointer" : "font-bold  bg-gray-200 text-gray-500 px-6 py-3 rounded-2xl hover:cursor-pointer"}`}
                    onClick={() => {
                        setSelect(false)
                    }}>Workshops</li>
            </ul>
            <div className="flex flex-col-reverse lg:flex-row justify-between">

                {
                    select ? <div className="mr-8">
                        {
                            events.map((element) => {
                                return <EventCard time={element.date} title={element.title} descrption={element.description} url={element.url} id={element._id} type={'e'} />
                            })
                        }

                    </div> :
                        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3 mr-4">
                            {
                                workshops.map((element) => {
                                return <WorkshopCard location={location} owner={element.owner} time={element.date} title={element.name} description={element.description} url={element.url} id={element._id} type={'e'} />
                            })  
                            }

                        </div>
                }


                <div className=" px-8 mt-8 bg-gray-200 rounded-lg hover:cursor-default h-[350px]">
                    <div className="font-bold text-4xl pt-4">
                        Clubs
                    </div>

                    <ul className="font-normal pt-8 text-2xl flex flex-col gap-4 w-auto md:w-56">
                        <li><Link to='/clubs'>

                            <ul className=" flex items-center gap-2">
                                <li className={`${location === "/clubs" ? "hover:cursor-pointer  w-3 h-3 rounded-full bg-blue-300" : "hover:cursor-pointer border-2 bg-white border-gray-700 w-3 h-3 rounded-full"}`}>
                                </li>
                                <li className={`${location === "/clubs" ? "font-medium text-blue-400" : ""}`}>All</li>
                            </ul></Link>
                        </li>
                        <li><Link to='/clubs/alphabit'>

                            <ul className=" flex items-center gap-2">
                                <li className={`${location === "/clubs/alphabit" ? "hover:cursor-pointer   w-3 h-3 rounded-full bg-blue-300" : "hover:cursor-pointer border-2 bg-white border-gray-700 w-3 h-3 rounded-full"}`}>
                                </li>
                                <li className={`${location === "/clubs/alphabit" ? "font-medium text-blue-400" : ""}`}>Alphabit</li>
                            </ul></Link>
                        </li>


                        <li >
                            <Link to='/clubs/ingenioums'>
                                <ul className=" flex items-center gap-2">
                                    <li className={`${location === "/clubs/ingenioums" ? "hover:cursor-pointer   w-3 h-3 rounded-full bg-blue-300" : "hover:cursor-pointer border-2 bg-white border-gray-700 w-3 h-3 rounded-full"}`}>
                                    </li>
                                    <li className={`${location === "/clubs/ingenioums" ? "font-medium text-blue-400" : ""}`}>Ingeniums</li>
                                </ul>
                            </Link>
                        </li>
                        <li>
                            <Link to='/clubs/gdg-sba'>
                                <ul className=" flex items-center gap-2">
                                    <li className={`${location === "/clubs/gdg-sba" ? "hover:cursor-pointer  w-3 h-3 rounded-full bg-blue-300" : "hover:cursor-pointer border-2 bg-white border-gray-700 w-3 h-3 rounded-full"}`}>
                                    </li>
                                    <li className={`${location === "/clubs/gdg-sba" ? "font-medium text-blue-400" : ""}`}>GDG SBA</li>
                                </ul>
                            </Link>
                        </li>
                        <li>
                            <Link to='/clubs/gdsc'>
                                <ul className=" flex items-center gap-2">
                                    <li className={`${location === "/clubs/gdsc" ? "hover:cursor-pointer   w-3 h-3 rounded-full bg-blue-300" : "hover:cursor-pointer border-2 border-gray-700 bg-white w-3 h-3 rounded-full"}`}>
                                    </li>
                                    <li className={`${location === "/clubs/gdsc" ? "font-medium text-blue-400" : ""}`}>GDSC</li>
                                </ul>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    );
}
