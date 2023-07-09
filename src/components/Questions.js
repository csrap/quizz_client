import React, { useState } from 'react'

export default function Questions() {

  const [checked, setchecked] = useState(undefined);

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
            value={checked}
            name="options"
            id='q1-option'
            onChange={onSelect}
          />
        </li>
      </ul>
    </div>
  )
}
