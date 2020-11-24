import React, { useState } from 'react'

function Button ({ disabled = false }) {
  const [state, setState] = useState(0)

  return <div className="component" style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <span style={{
      fontSize: 24,
      fontWeight: 800,
      marginBottom: 12
    }}>
      { state }
    </span>
    <button
      disabled={disabled}
      onClick={() => setState(state + 1)}
    >
      Increase
    </button>
  </div>
}

export default Button
