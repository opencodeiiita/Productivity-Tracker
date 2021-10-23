import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Notes() {
    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')

    var notes =  []
    useEffect(() => {
      axios.get('http://localhost:5000/note')
      .then(res => {
          notes = res
      })          
    },)

    const submit = async(e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/note' , {body:{'title':Title,text:Description}})
        .then(res => {
            alert(res)
        })
        setTitle('')
        setDescription('')
        document.querySelector('.noteTitle').innerHTML = ''
        document.querySelector('.noteDescription').innerHTML = ''
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
            onChange = {(e) => setTitle(e.target.value)}>
            </input>
            <p>Description: </p>
            <input 
            className = "noteDescription"
            type= {Text} 
            required = {true} 
            onChange = {(e) => setDescription(e.target.value)}>
            </input>
            <button onClick = {submit}>Add</button>
            </form>
            <h2>Notes</h2>
            <div className = "notes">
                {notes.map(element => {
                    return(
                    <div>
                    <div>Title: {element.title}</div>
                    <div>Description: {element.text}</div>
                    <div>Time: {new Date(element.timeStamp).toJSON().slice(0,10).replace(/-/g,'/')}</div>
                    <br></br>
                    </div>
                )}) }
            </div>

        </div>
    )
}
