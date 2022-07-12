import React from 'react'

const FetchDisplay = (props) => {

    return (
        <div>
            <ul>
            {/* iterates through the pokemonList array and returns a li for each pokemon */}
            {
                props.pokemonList.map((eachPokemon, i) => {
                    return (
                        <li key={i}>{eachPokemon.name}</li>
                        )
                    })
                }
                </ul>
        </div>
    )
}

export default FetchDisplay