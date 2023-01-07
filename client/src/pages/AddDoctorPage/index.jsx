import "./style.css";
import axios from "axios";
import { useState } from "react";
const AddDoctorPage = () => {
    const [event, setEvent] = useState('')
    const [detail, setDetail] = useState('')
    const [file, setFile] = useState(null)
    const [date, setDate] = useState('')
    const Docter = {
        event: event,
        details: detail,
        file: file,
        date: date
    }
    return (
        <section className="profile">
            <h1 className="font-bold text-5xl">Add doctor event</h1>
            <form className="edit-profile">
                <div className="inputs">
                    <label htmlFor="event-title">Event Title:</label>
                    <input onChange={(e) => {
                        setEvent(e.target.value)
                    }} type="text" id="event-title" />
                </div>
                <div className="inputs">
                    <label for="description">Description:</label>
                    <textarea onChange={(e) => {
                        setDetail(e.target.value)
                    }} className="outline-none" id="description" rows="10"></textarea>
                </div>
                <div className="inputs">
                    <label htmlFor="Image">Image:</label>
                    <input onChange={(e) => {
                        setFile(e.target.files[0])
                    }} type="file" />
                </div>
                <div className="inputs">
                    <label>Date:</label>
                    <input onChange={(e) => {
                        setDate(e.target.value)
                    }} type="datetime-local" />
                </div>
                <div>
                    <button className="save-changes"
                        onClick={async (e) => {
                            e.preventDefault()
                            await axios.post('http://localhost:5000/api/doctors/new', Docter, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }).then(() => {
                                window.location.pathname = '/home'
                            })
                        }}
                    >ADD EVENT</button>
                </div>
            </form>
        </section>
    )
}

export default AddDoctorPage;