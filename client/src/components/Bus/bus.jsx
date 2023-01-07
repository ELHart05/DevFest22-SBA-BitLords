import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Bus({ user }) {
        const location = useLocation().pathname;

    const [events, setEvents] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/buses/'
        ).then((e) => {
            setEvents(e.data[e.data.length-1].events)
        }).catch((e) => {
        })
    }, [])
    return (

        <div className=" p-10 xl:p-0">
            <FullCalendar
                height={"auto"}
                slotMinTime={"08:00:00"}
                slotDuration={"01:00:00"}
                slotMaxTime={"17:00:00"}
                allDaySlot={false}

                dayHeaderFormat={
                    {
                        weekday: document.body.offsetWidth < 2200 ? "short" : "long"
                    }
                }
                slotLabelFormat={{
                    hourCycle: "h24",
                    minute: "numeric",
                    hour: "numeric"
                }}
                headerToolbar={false}
                select={(arg) => {
                    console.log(arg)
                }}
                events={
                    events
                }
                selectMirror={true}
                selectOverlap={false}
                fixedWeekCount={false}
                displayEventTime={false}
                eventClick={(e) => {
                    if (user.role === "admin") {
                        let temp = {
                            daysOfWeek: [e.event._instance.range.start.getDate() - 1],
                            startTime: (e.event._instance.range.start.getHours() - 1) + ":00:00",
                            endTime: (e.event._instance.range.start.getHours()) + ":00:00",
                            color: "blue"
                        }
                        events.map((element, index) => {

                            if (element.daysOfWeek[0] === temp.daysOfWeek[0] && element.startTime === temp.startTime) {
                                let newEvents = events.filter((element, i) => {
                                    return i !== index
                                })
                                console.log(newEvents);
                                setEvents(newEvents)
                            }
                        })
                    } else {
                        return
                    }

                }}
                dateClick={(d) => {
                    if (user.role === "admin") {
                        let temp = {
                            daysOfWeek: [d.date.getDay()],
                            startTime: d.date.getHours() + ":00:00",
                            endTime: (d.date.getHours() + 1) + ":00:00",
                            color: "blue"
                        }
                        setEvents(events.concat(temp))
                    } else {
                        return
                    }

                }}
                validRange={(now) => {
                    let k = new Date();
                    now.setDate(now.getDate() - now.getDay())
                    let d = new Date(now.getTime())
                    d.setMonth(d.getMonth() + 1)
                    d.setDate(d.getDate() + (6 - d.getDay()))
                    return {
                        start: now,
                        end: d
                    }
                }}
                plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
                initialView="timeGridWeek"
            >

            </FullCalendar>
            {
                user.role === "admin" && location !=="/home" &&
                <div className="py-8  text-white grid grid-flow-col gap-4">
                    <button onClick={() => {
                        axios.post('http://localhost:5000/api/buses/new', { events: events }
                        ).then((e) => {
                            window.location.pathname = '/bus'
                        }).catch((e) => {
                            console.log(e.response.data);
                        })
                    }}
                        className="bg-green-600 py-2 rounded-lg">Save</button>
                    <button onClick={() => {
                        setEvents([])
                    }}
                        className="bg-red-500 py-2 rounded-lg">Cancle</button>
                </div>
            }

        </div>);
}

export default Bus;