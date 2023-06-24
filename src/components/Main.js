import React from 'react'

export default function Main() {
  return (
    <div className='container'>
      <h1 className='title text-light'> Quiz Application</h1>

      <ul>
        <li> You will be asked 10 questions one after another</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>Each question has three options. You can choose only one options.</li>
        <li>You can review and change answers beffore the quiz finish</li>
        <li>The result will be declared at the end of the quiz</li>
      </ul>

      <form id="form">
        <input type="text" placeholder="Username" />
      </form>
    </div>
  )
}
