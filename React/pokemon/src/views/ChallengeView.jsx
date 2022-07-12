import React,{ useState } from 'react'
import ChallengeDisplay from '../components/ChallengeDisplay'
import ChallengeForm from '../components/ChallengeForm'

const ChallengeView = () => {
  const [pokemonName, setPokemonName] = useState("bulbasaur")
  const receivePokemonName = newName => {
    setPokemonName(newName)
  }

  return (
    <div>
        <ChallengeForm onNewName = {receivePokemonName} />
        <ChallengeDisplay pokemonName = {pokemonName}/>
    </div>
  )
}

export default ChallengeView