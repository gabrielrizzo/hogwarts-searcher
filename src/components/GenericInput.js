import React, { useState } from 'react'
import '../css/common.css'

function GenericInput (props) {
  const [ value, setValue ] = useState('')

  return(
    <input
      placeholder="Procure por uma casa de Hogwarts"
      className="default-margin"
      type="text"
      value={value}
      onChange={($event) => {
        setValue($event.target.value)
        props.handler($event.target.value)
      }}
    />
  )
}

export default GenericInput
