import React, { useState } from 'react'
import FetchDisplay from '../components/fetchDemo/FetchDisplay'
import axios from 'axios'

const FetchDemo = () => {

    const [pokemon, setPokemon] = useState()

    // api call using .then and .catch
    const fetchPokemonWithThen = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
            .then(response => {
                return response.json()
            })
            .then(jsonResponse => {
                console.log(jsonResponse)
                setPokemon(jsonResponse)
            })
            .catch(err => console.log("catch . . ." + err))
    }

    // api call with await
    const fetchPokemonWithAwait = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/eevee`)
        const jsonResponse = await response.json()
        // console.log(jsonResponse)
        setPokemon(jsonResponse)
    }

    // await with try and catch  -> similar to then and catch
    const fetchPokemonWithAwait2 = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
            const jsonResponse = await response.json()
            setPokemon(jsonResponse)
        } catch (err) {
            setPokemon()
            alert("the pokemon is not available")
        }
    }

    //using axios to fetch api data
    const fetchPokemonWithAxios = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/snorlax`)
            .then(response => console.log(response.data))
            .catch(err=>console.log(err))
    }

    const fetchPokemonWithAxios2 = async() => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/ninetales`)
        setPokemon(response.data)
    }

    return (
        <fieldset>
            <legend>FetchDemo.jsx</legend>
            <button onClick={fetchPokemonWithThen}> Fetch with .then</button>
            <button onClick={fetchPokemonWithAwait}> Fetch with Await</button>
            <button onClick={fetchPokemonWithAwait2}> Fetch with await and try/catch</button>
            <button onClick={fetchPokemonWithAxios}> Axios.get</button>
            <button onClick={fetchPokemonWithAxios2}> Axios.get async</button>

            {
                pokemon ?
                    <FetchDisplay pokemon={pokemon} /> :
                    <h5>Fetch a pokemon by clicking a button</h5>
            }


        </fieldset>
    )
}

export default FetchDemo