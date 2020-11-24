import React from 'react'
import ReactDOM from 'react-dom'

export default function Info () {
  return <ul className="info">
    <li>Versão do React: <strong>{ React.version }</strong></li>
    <li>Versão do ReactDOM: <strong>{ ReactDOM.version }</strong></li>
  </ul>
}
