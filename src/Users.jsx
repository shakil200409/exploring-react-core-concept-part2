import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([]);

    // useEffect with a callback function and dependency (e.g. empty array)
    useEffect(() => {

        // On the callback function, fetch data from api's

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return(
        <div>
            <h2>Users: {users.length} </h2>
        </div>
    )
}