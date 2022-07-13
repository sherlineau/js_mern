import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DisplayOnLoad = (props) => {
    const {pokemonName} = useParams()
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [pokemonName])

    return (
        <fieldset>
            <legend>DisplayOnLoad.jsx</legend>
            {
                //do we have a pokemon
                pokemon?
                // if we do show something
                <div><h1>{pokemon.name}</h1>
                <img src={pokemon.sprites.front_shiny} alt=""/></div>
                : <h3>loading..</h3>
            }
        </fieldset>
    )
}

export default DisplayOnLoad