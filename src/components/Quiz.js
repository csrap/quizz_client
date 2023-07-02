import React from 'react';
import Questions from './Questions';

export default function Quiz() {


  /** next button event handle */
  function onNext() {
    console.log('On next click')
  }

  /** prev button event handle */
  function onPrev() {
    console.log('On OnPrev click')
  }


  return (
    <div className='container'>
      <h1 className='title text-light'>
        Quiz Application
      </h1>

      {/*  display questions */}
      <Questions></Questions>

      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Max</button>
      </div>
    </div>
  )
}
