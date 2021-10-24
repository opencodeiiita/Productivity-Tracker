import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Notes.css'

export default function Notes() {
    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [notes, setnotes] = useState([])
    const [time, settime] = useState('')

    const submit = async(e) => {
        e.preventDefault()
        if(!Title || !Description){
            return alert("Please fill title and description")
        }
        setnotes([...notes,{'Title': Title, 'Description': Description, 'Time': new Date().toLocaleString()}])
        setTitle('')
        setDescription('')
    }

    return (
        <div>
            <h1>Add a Note</h1>
            <form onSubmit = {submit}>
            <p>Title: </p>
            
            <input 
            className = "noteTitle"
            type= {Text} 
            required = {true} 
            value = {Title}
            onChange = {(e) => setTitle(e.target.value)}>
            </input>
            <br />
            <br />


            <p>Description: </p>
            <textarea
            cols={100}
            rows = {10}
            className = "noteDescription"
            type= {Text} 
            value = {Description}
            required = {true} 
            onChange = {(e) => setDescription(e.target.value)} />
            <br /><br />
            <button onClick = {submit}>Add</button>
            </form>
            <br />
            <h2>Notes</h2>
            <div className = "notes">
                {notes.map(element => {
                    return(
                    <div className="note" key="1">
                    <div className="title">Title: {element.Title}</div>
                    <div className="description">Description: {element.Description}</div>
                    <div className="time">Time: {element.Time}</div>
                    </div>
                )}) }
            </div>

        </div>
    )
}
