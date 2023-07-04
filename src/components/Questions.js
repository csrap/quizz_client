import React from 'react'

export const Questions = () => {
  return (
    <div className="questions">
      <h2 className='text-light'> Simple Question 1</h2>

      <ul>
        <li>
          <input
            type="radio"
            value={true}
          />
        </li>
      </ul>
    </div>
  )
}
