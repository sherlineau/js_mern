import React, {useState} from 'react'
import axios from 'axios'
import FetchDisplay from './FetchDisplay'

const FetchForm = (props) => {
    const [pokemonList, setPokemonList] = useState()

    const fetchPokemon = async() => {
        // fetchs all pokemon from api and sets data.results to the pokemon list
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        setPokemonList(response.data.results)
    }

    return (
        <div>FetchDisplay
            <button onClick={fetchPokemon}>Fetch all pokemon</button>

            {pokemonList ? 
            <FetchDisplay pokemonList = {pokemonList}/>:
            <h5>Click the button to retrieve all pokemon names</h5>}
        </div>
    )
}

export default FetchForm