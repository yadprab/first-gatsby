import React from 'react'

function Button({label}) {
    return (
      <>
        <button
          id={`${label}--button`}
          aria-label={`${label}button`}
        >
            {label}
        </button>
      </>
    )
}

export  {Button}
