import React from 'react'

export default function Quiz() {

  function onNext() {
    console.log('On next click')
  }

  function onPrev() {
    console.log('On OnPrev click')
  }


  return (
    <div className='container'>
      <h1 className='title text-light'>
        Quiz Application
      </h1>

      <Next className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Max</button>
      </Next>
    </div>
  )
}
