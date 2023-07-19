import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const [members, setMembers] = useState([]);

    const getMembers = () => {
        axios.get('http://localhost:8000/api/members')
            .then(res=>setMembers(res.data))
            .catch(err=>console.log(err))
    }

    useEffect(getMembers, [])

    const handleDelete = (id) => {
        if (window.confirm("Confirm Delete?")){
            axios.delete(`http://localhost:8000/api/members/${id}`)
                .then(()=>{})
                .catch(err=>console.log(err))
            // remove from DOM
            setMembers(members.filter(member => member._id !== id))
        }
    }

    return (
        <div className='test'>
            <div className='navBar'>
                <Link to={'/players/list'} >List</Link>
                |
                <Link to={'/players/addplayer'} >Add PLayer</Link>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member,id)=> {
                        return (
                            <tr key={id}>
                                <td>{member.playerName}</td>
                                <td>{member.preferredPosition}</td>
                                <td><button onClick={() => handleDelete(member._id)}>Delete Button</button></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard