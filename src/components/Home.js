import React, { useState } from 'react';
import CharacterItem from './CharacterItem'
import '../css/Home.css'
import GenericInput from './GenericInput'
import { Http } from '../service'

function Home() {
  const [ title ] = useState('Hogwarts Searcher')
  const [ queryName, setQueryName ] = useState('')
  const [ characters, setCharacters ] = useState([])

  function handleChange (name) {
    setQueryName(name)
  }

  async function searchHarryPotterCharacterByHouse () {
    let englishHarryPotterHouse = ''

    switch (queryName.toLowerCase()) {
      case 'grifinória':
        englishHarryPotterHouse = 'Gryffindor'
        break
      case 'lufa-lufa':
        englishHarryPotterHouse = 'Hufflepuff'
        break
      case 'sonserina':
        englishHarryPotterHouse = 'Slytherin'
        break
      case 'corvinal':
        englishHarryPotterHouse = 'Ravenclaw'
        break
      default:
        break
    }
    const characters = await Http.HarryPotterAPI.getCharacterByQuery(`house=${englishHarryPotterHouse}`)
    setCharacters(characters)
  }
  return(
    <div className="container">
      <h1>{title}</h1>
      <GenericInput
        className="input"
        handler={handleChange}
      />
      <button
        style={{ marginBottom: '20px' }}
        onClick={ () => searchHarryPotterCharacterByHouse()}
      >Procurar</button>
      {characters.map((character) =>
        <CharacterItem
        key={character._id}
        className="item-list"
        character={character}
      />)}
    </div>
  )
}

export default Home
