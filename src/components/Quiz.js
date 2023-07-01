import React from 'react'

export default function Quiz() {

  function onMext() {
    console.log('')
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>
        Quiz Application
      </h1>

      <div className='grid'>
        <button className='btn prev'>Prev</button>
        <button className='btn next'>Max</button>
      </div>
    </div>
  )
}
