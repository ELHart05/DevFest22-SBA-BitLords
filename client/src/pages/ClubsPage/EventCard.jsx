import { useLocation } from "react-router-dom";
import axios from "axios";


export const EventCard = ({ title, descrption, time, url, id, type }) => {
    const location = useLocation().pathname;

    return (
        <section className='bg-slate-700 hover:bg-slate-400 transition-all lg:gap-12 p-8 mb-8 ml-8 rounded-lg shadow-xl'>
            <div className="  flex flex-col sm:flex-row justify-center gap-10 m-8 ">
                <div>
                    <img className='max-h-48' src={url} alt="logo" />
                </div>
                <div className='text-white mr-[10vw]'>
                    <div>
                        <ul className='pb-2'>
                            <li className='font-bold text-2xl'>Tiltle : </li>
                            <li className='text-lg'>{title}</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='pb-2'>
                            <li className='font-bold text-2xl'>Description : </li>
                            <li className='text-lg'>{descrption}</li>
                        </ul>
                        <ul className='pb-2'>
                            <li className='font-bold text-2xl'>Time : </li>
                            <li className='text-lg'>{time}</li>
                        </ul>
                    </div>
                </div>

            </div>
            {
                location === '/requests' ? <div className='grid content-center grid-flow-row lg:grid-flow-col gap-4 text-white'>
                    <button onClick={() => {
                        if (type === "e") {
                            axios.patch(`http://localhost:5000/api/events/edit/${id}`, {isAccepted: true}).catch((e)=>{
                                console.log(e.response.data);
                            })
                        } else {
                            axios.patch(`http://localhost:5000/api/workshops/edit/${id}`, {isAccepted: true}).catch((e)=>{
                                console.log(e.response.data);
                            })

                        }
                    }} className='bg-green-400 py-2 rounded-lg'>Accept</button>
                    <button onClick={() => {
                        if (type === "e") {
                            axios.delete(`http://localhost:5000/api/events/delete/${id}`).catch((e)=>{
                                console.log(e.response.data);
                            })
                        } else {
                            axios.delete(`http://localhost:5000/api/workshops/delete/${id}`).catch((e)=>{
                                console.log(e.response.data);
                            })

                        }

                    }}
                        className='bg-red-600 py-2 rounded-lg'>Delete</button>
                </div>
                    : null
            }

        </section>


    );
}