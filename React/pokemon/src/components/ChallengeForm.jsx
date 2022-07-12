import React, { useState } from 'react'

const ChallengeForm = (props) => {
    const [pokemonName, setPokemonName] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        props.onNewName(pokemonName)
    }

    return (
        <div>
            <h1>Search for a pokemon!</h1>
            <form onSubmit={handleSubmit} style={{width:"500px"}} className="mx-auto my-3">
                <input type="text" name='pokemonName' value={pokemonName} onChange={e => setPokemonName(e.target.value)} required className="form-control"/>
                <button type='submit' className="btn btn-primary mt-3">Search</button>
            </form>
        </div>
    )
}

export default ChallengeForm