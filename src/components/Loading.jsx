import React from 'react'

function Loading() {
  return (
    <div className="progress" 
        role="progressbar" 
        aria-label="Animated striped example" 
        aria-valuenow="75" 
        aria-valuemin="0" 
        aria-valuemax="100">
        <div className="progress-bar progress-bar-striped progress-bar-animated"></div>
    </div>
  )
}

export default Loading