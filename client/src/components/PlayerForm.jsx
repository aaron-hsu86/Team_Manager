import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlayerForm = () => {
    const [formData, setFormData]=useState({
        playerName:'',
        preferredPosition:''
    })

    const [nameErr, setNameErr] = useState('');

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/members', formData)
            .then(res=>{
                // console.log(res)
                setFormData({
                    playerName:'',
                    preferredPosition:''
                })
                setNameErr('')
                navigate('/players/list')
            }).catch(err=>{
                // console.log(err.response.data.errors.playerName.message)
                setNameErr(err.response.data.errors.playerName.message)
            })
    }

    const handlechange = e => {
        const {name, value } = e.target;
        setFormData(currentData => ({...currentData, [name]:value}))

        if (formData.playerName.length < 2){
            setNameErr('Player name must be at least 2 characters long');
        } else setNameErr('');
    }

    return (
        <fieldset>
            <form onSubmit={handleSubmit}>
                <label>Player Name:</label>
                <input type="text" placeholder='required!' name='playerName' onChange={handlechange} value={formData.playerName}/>
                {nameErr==''? <br/> :<p className='errMsg'>{nameErr}</p>}
                
                <label>Preferred Position:</label>
                <input type="text" placeholder='(optional)' name='preferredPosition' onChange={handlechange} value={formData.preferredPosition}/>
                <br/>
                {nameErr == '' && formData.playerName != ''?
                    <button>Submit</button>
                    :<></>
                }
            </form>
        </fieldset>
    )
}

export default PlayerForm