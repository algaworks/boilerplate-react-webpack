import ReactDOM from 'react-dom'
import React, { useState } from 'react'

function App () {
  return <div>
    <h1>Hello Worlds</h1>
    <Nav />
    <Button />
  </div>
}

ReactDOM.render(<App />, document.querySelector('#app'))
