import React, { useState } from 'react';
import CharacterItem from './CharacterItem'
import '../css/Home.css'
import GenericInput from './GenericInput'
import GenericButton from './GenericButton'
import { Http } from '../service'

function Home () {
  const [ title ] = useState('Hogwarts Searcher')
  const [ queryName, setQueryName ] = useState('')
  const [ loading, setLoading ] = useState(false)
  const [ characters, setCharacters ] = useState([])

  function handleChange (name) {
    setQueryName(name)
  }

  async function searchHarryPotterCharacterByHouse () {
    setLoading(true)
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
    setTimeout(() => {
      setCharacters(characters)
      setLoading(false)
    }, 300)
  }
  return(
    <div className="container">
      <h1>{title}</h1>
      <GenericInput
        className="input"
        handler={handleChange}
      />
      <GenericButton
        handler={searchHarryPotterCharacterByHouse}
        text="Pesquisar"
        type="primary"
        loading={loading}
        >
      </GenericButton>
      <div style={{ display: 'flex', flexDirection: 'column',  flexGrow: 1, width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: '24px' }}>
        {characters.map((character) =>
          <CharacterItem
          key={character._id}
          character={character}
        />)}
      </div>
    </div>
  )
}

export default Home
