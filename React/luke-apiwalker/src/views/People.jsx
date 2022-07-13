import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const People = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [person, setPerson] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => setPerson(res.data))
            .catch(err => navigate('/error'))
    });

    return (
        <div>

            {
                person ?
                    <div>
                        <h1 className='display-1'>{person.name}</h1>
                        <p className='display-6'><b>Height: </b>{person.height} cm</p>
                        <p className='display-6'><b>Mass: </b>{person.mass} kg</p>
                        <p className='display-6'><b>Hair Color: </b>{person.hair_color}</p>
                        <p className='display-6'><b>Skin Color: </b>{person.skin_color}</p>
                    </div>
                    : ""
            }
        </div>
    )
}

export default People