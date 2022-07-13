import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Starships = (props) => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [starship, setStarship] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(res => setStarship(res.data))
            .catch(err => navigate('/error'))
    });

    return (
        <div>
            {
                starship ?
                    <div>
                        <h1 className='display-1'>{starship.name}</h1>
                        <p className='display-6'><b>Manufacturer: </b>{starship.manufacturer}</p>
                        <p className='display-6'><b>Crew: </b>{starship.crew}</p>
                        <p className='display-6'><b>Passengers: </b>{starship.passengers}</p>
                        <p className='display-6'><b>Cargo Capacity: </b>{starship.cargo_capacity}</p>
                    </div>
                    : ""
            }
        </div>
    )
}

export default Starships