import DoctorDetails from './DoctorDetails';
import EventCard from "./EventCard";
import './style.css';
import { useState, useEffect } from "react";
import axios from "axios";

const DoctorPage = () => {
    const [docs, setDocs] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/doctors/'
        ).then((e) => {
            setDocs(e.data)
        }).catch((e) => {
            console.log(e.response.data);
        })
 
    })
    return (
        <div className='wrapper flex flex-col gap-10 rounded-md py-10 items-center'>
            <DoctorDetails />
            <div className='flex flex-col gap-5 items-start px-8 w-full max-w-[940px]'>
                <h1 className='font-bold text-4xl'>Doctor Events</h1>
                {
                   docs.map((element)=>{
                    console.log(element);
                    return <EventCard time={element.date} description={element.details} title={element.event} url={element.url}/>
                   }) 
                }

            </div>
        </div>
    )
}

export default DoctorPage;