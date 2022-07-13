import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Planets = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [planet, setPlanet] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => setPlanet(res.data))
            .catch(err => navigate('/error'))
    });

    return (
        <div>
            {
                planet ?
                    <div>
                        <h1 className='display-1'>{planet.name}</h1>
                        <p className='display-6'><b>Climate: </b>{planet.climate}</p>
                        <p className='display-6'><b>Terrain: </b>{planet.terrain}</p>
                        <p className='display-6'><b>Surface Water: </b>{planet.surface_water > 0 ? 'yes' : 'unknown'}</p>
                        <p className='display-6'><b>Population: </b>{planet.population}</p>
                    </div>
                    : ""
            }
        </div>
    )
}

export default Planets