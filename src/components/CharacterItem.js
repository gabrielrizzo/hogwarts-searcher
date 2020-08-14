import React from 'react'
import '../css/CharacterItem.css'

function CharacterItem (props) {

  return(
    <div className="character-item">
      <h1 className="character-item__name">{props.character.name}</h1>
    </div>
  )
}

export default CharacterItem
