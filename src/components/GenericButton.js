import React from 'react'
import '../css/button.css'
import Spinner from './Spinner'

function GenericButton (props) {
  function getClass () {
    return `button button--${props.type}`
  }

  return (
    <button
    onClick={ () => props.handler() }
    className={ getClass() }>
      <div className="button__content">
        <div className="content__spinner" style={{ display: props.loading ? 'flex' : 'none' }}>
          <Spinner></Spinner>
        </div>
        <div className="content__text" style={{ display: props.loading ? 'none' : 'flex' }}>
          <i className={ `text__icon fas fa-${props.icon}` }></i>
          {props.text}
        </div>
      </div>
    </button>
  )
}

export default GenericButton
