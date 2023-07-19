import React from 'react'
import { Link } from 'react-router-dom'
import PlayerForm from '../components/PlayerForm';

const NewPlayer = () => {

    // move the axios call from the player form out here? issue with props moving data back and forth?

    return (
        <div className='test'>
            <div className='navBar'>
                <Link to={'/players/list'} >List</Link>
                |
                <Link to={'/players/addplayer'} >Add PLayer</Link>
            </div>
            <PlayerForm/>
        </div>
    )
}

export default NewPlayer