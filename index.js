import ReactDOM from 'react-dom'
import React, { useState } from 'react'

import './index.css'

function App () {
  return <div className="container">
    <h1 className="header">
      Hello World
    </h1>
    <Nav />
    <Button />
  </div>
}

ReactDOM.render(<App />, document.querySelector('#app'))
