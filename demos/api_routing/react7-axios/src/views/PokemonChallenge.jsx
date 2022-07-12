import React, { useState } from 'react'
import DisplayOnLoad from '../components/DisplayOnLoad'
import PokemonForm from '../components/PokemonForm'

const PokemonChallenge = () => {
    const [pokemonName, setPokemonName] = useState("venusaur")

    const receivePokemonName = newName => {
        setPokemonName(newName)
    }

    return (
        <div>
            <PokemonForm onNewName = {receivePokemonName}/>
            <DisplayOnLoad pokemonName = {pokemonName}/>
        </div>
    )
}

export default PokemonChallenge