import React from 'react'

const FetchAllDisplay = (props) => {

    return (
        <div>
            <ul className='list-group justify-content-center'>
            {/* iterates through the pokemonList array and returns a li for each pokemon */}
            {
                props.pokemonList.map((eachPokemon, i) => {
                    return (
                        <li className="list-group-item" key={i}>{eachPokemon.name}</li>
                        )
                    })
                }
                </ul>
        </div>
    )
}

export default FetchAllDisplay