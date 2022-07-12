import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ChallengeDisplay = (props) => {
    const {pokemonName} = props
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [pokemonName])

    return (
        <div >
            {
                pokemon ?
                    <div className='justify-content-center'>
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.sprites.front_default} alt="" />
                        <h5>Abilities</h5>
                        <ol className=" mx-auto list-group list-group-numbered justify-content-center" style={{width:"500px"}}>
                            {pokemon.abilities.map((eachAbility, i) => {
                                console.log(eachAbility)
                                return (
                                    <li className="list-group-item" key={i}>{eachAbility.ability.name}</li>
                                )
                            })}
                        </ol>
                    </div>
                    :
                    <h3>loading</h3>
            }
        </div>
    )
}

export default ChallengeDisplay