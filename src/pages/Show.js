import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function Show({ people, updatePeople, deletePeople, history }) {
    const { id } = useParams();
    const person = people.find((p) => p._id === id) 
    let navigate = useNavigate()

    const [editForm, setEditForm] = useState(person)

    const handleChange = (evt) => {
        setEditForm((prevState) => ({
            ...prevState,
            [evt.target.name]: evt.target.value,
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        updatePeople(editForm, person._id)
        navigate("/")
    }

    const removePerson = () => {
        deletePeople(person._id)
        navigate("/")
    }
    return (
        <div className="person">
            <h1>{person.name}</h1>
            <h2>{person.title}</h2>
            <img onScroll={person.image} alt={person.name}/> 
            <button id="delete" onClick={removePerson}>
                DELETE
            </button>
            <form onSubmit={handleSubmit}>
                <input type="text" value={editForm.name} name="name" placeholder="name" onChange={handleChange}/>
                <input type="text" value={editForm.image} name="image" placeholder="image" onChange={handleChange}/>
                <input type="text" value={editForm.title} name="title" placeholder="title" onChange={handleChange}/>
                <input type="submit" value="Update Person"/>
            </form>
        </div>
    )
}