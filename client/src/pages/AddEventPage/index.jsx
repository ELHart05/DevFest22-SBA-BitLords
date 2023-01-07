import "./style.css";
import axios from "axios";
import { useState } from "react";

const AddEventPage = ({user}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)
    const [date, setDate] = useState('')
    const [type, setType] = useState('')
    const Event = {
        title: title,
        description: description,
        file: file,
        date: date
    }
     const Event2 = {
        name: title,
        description: description,
        file: file,
        date: date,
        owner:user.firstname+" "+user.lastname
    }
    return (
        <section className="profile">
            <h1 className="font-bold text-5xl">Add Event</h1>
            <form className="edit-profile">
                <div className="inputs">
                    <label for="event-title">Event Title:</label>
                    <input onChange={(e) => {
                        setTitle(e.target.value)
                    }} type="text" id="event-title" />
                </div>
                <div className="inputs">
                    <label htmlFor="description">Description:</label>
                    <textarea onChange={(e) => {
                        setDescription(e.target.value)
                    }} className="outline-none" id="description" rows="10"></textarea>
                </div>
                <div className="inputs">
                    <label htmlFor="Image">Image:</label>
                    <input onChange={(e) => {
                        setFile(e.target.files[0])
                    }} type="file" />
                </div>
                <div className="inputs">
                    <label for='type'>Type:</label>
                    <div className="flex bg-[#f2f7f6] w-full items-center justify-start p-4">
                        <div>
                            <label className="font-bold">Event</label>
                            <input onChange={() => {
                                setType("event")
                            }} type="radio" name="type" />
                        </div>
                        <div>
                            <label onChange={() => {
                                setType("workshop")
                            }} className="font-bold">Workshop</label>
                            <input type="radio" name="type" />
                        </div>
                    </div>
                </div>
                <div className="inputs">
                    <label>Date:</label>
                    <input onChange={(e) => {
                        setDate(e.target.value)
                    }} type="datetime-local" />
                </div>
                <div>
                    <button onClick={async (e) => {
                        e.preventDefault()
                        if (type === "event") {
                            await axios.post('http://localhost:5000/api/events/new', Event, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }).then(() => {
                                window.location.pathname = '/home'
                            })
                        } else {
                            await axios.post('http://localhost:5000/api/workshops/new', Event2, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }).then(() => {
                                window.location.pathname = '/home'
                            }).catch((e)=>{
                                console.log(e.response.data);
                            })
                        }
                    }} className="save-changes">ADD EVENT</button>
                </div>
            </form>
        </section>
    )
}

export default AddEventPage;