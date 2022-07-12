import React, { useState } from 'react'
import axios from 'axios'
import FetchAllDisplay from './FetchAllDisplay'

const FetchForm = (props) => {
    const [pokemonList, setPokemonList] = useState()

    const fetchAllPokemon = async () => {
        // fetchs all pokemon from api and sets data.results to the pokemon list
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        setPokemonList(response.data.results)
    }

    return (
        <div className="container">
            <button className="btn btn-primary m-3" onClick={fetchAllPokemon}>Fetch all pokemon</button>
            <div className="container justify-content-center" style={{width: "500px"}}>

                {pokemonList ?
                    <FetchAllDisplay pokemonList={pokemonList} /> :
                    <h5>Click the button to retrieve all pokemon names</h5>}
            </div>
        </div>
    )
}

export default FetchForm