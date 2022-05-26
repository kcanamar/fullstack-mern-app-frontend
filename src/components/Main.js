import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Index from "../pages/Index"
import Show from "../pages/Show"

export default function Main() {

    const [people, setPeople] = useState(null)
    const URL = "https://karc-fullstack-mern-app-be.herokuapp.com/people"
    const getPeople = async () => {
        const data = await fetch(URL).then(res => res.json())
        setPeople(data)
    }

    const createPeople = async (person) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(person),
        })
        getPeople()
    }

    useEffect(() => {getPeople()}, [people])
    return (
        <main>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Index people={people} createPeople={createPeople}/>}/>
                <Route path="/people/:id" element={<Show people={people}/>}/>
            </Routes>
        </main>
    )
}