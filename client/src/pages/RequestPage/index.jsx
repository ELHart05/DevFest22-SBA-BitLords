import { EventCard } from "../ClubsPage/EventCard";
import axios from "axios";
import { useState, useEffect } from "react";


const Requests = () => {
    const [events, setEvents] = useState([])
    const [workshops, setWorkshops] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/events/'
        ).then((e) => {
            let temp = e.data.filter((element) => {
                return !element.isAccepted
            })
            setEvents(temp)

        }).catch((e) => {
            console.log(e.response.data);
        })

        axios.get('http://localhost:5000/api/workshops/'
        ).then((e) => {
            let temp2 = e.data.filter((element) => {
                return !element.isAccepted
            })
            setWorkshops(temp2)

        }).catch((e) => {
            console.log(e.response.data);
        })
    })
    return (
        <section>
            <div className="text-3xl text-gray-600 pt-12 px-16">
                Accept or delete :
            </div>
            <div className="p-16">
                {
                    events.length === 0 && workshops.length ===0 && <div>
                        No data
                    </div>
                }
                {
                    events.map((element) => {
                        return <EventCard time={element.date} title={element.title} descrption={element.description} url={element.url} id={element._id} type={'e'} />
                    })
                }
                {
                     workshops.map((element) => {
                        return <EventCard time={element.date} title={element.name} descrption={element.description} url={element.url} id={element._id} type={'w'}/>
                    })
                }
            </div>
        </section>
    );
}

export default Requests;