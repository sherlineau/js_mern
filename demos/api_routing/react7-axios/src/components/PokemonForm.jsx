import React from 'react'
import { useState } from 'react'

const PokemonForm = (props) => {
    const [pokemonName, setPokemonName] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        props.onNewName(pokemonName)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <p>
                <input type="text" name="pokemonName" value={pokemonName} onChange={e=>setPokemonName(e.target.value)}/>
            </p>
            <button type="submit">Search for a shiny pokemon</button>
        </form>
    </div>
  )
}

export default PokemonForm