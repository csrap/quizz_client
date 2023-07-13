import React, { useEffect, useState } from 'react'
import data from '../database/data'

export default function Questions() {

  const [checked, setchecked] = useState(undefined);

  useEffect(() => {
    console.log(data)
  });

  function onSelect() {
    setchecked(true)
    console.log('radio button change');
  }

  return (
    <div className="questions">
      <h2 className='text-light'> Simple Question 1</h2>

      <ul>
        <li>
          <input
            type="radio"
            value={false}
            name="options"
            id='q1-option'
            onChange={onSelect}
          />

          <label className='text-primary' htmlFor="q1-option"> Option</label>
          <div className='check checked'></div>
        </li>
      </ul>
    </div>
  )
}
