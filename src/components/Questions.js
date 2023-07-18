import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import data from '../database/data'

export default function Questions() {

  const [checked, setChecked] = useState(undefined)
  const { trace } = useSelector(state => state.questions);
  const result = useSelector(state => state.result.result);
  const [{ isLoading, apiData, serverError }] = useFetchQestion()

  const questions = useSelector(state => state.questions.queue[state.questions.trace])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateResult({ trace, checked }))
  }, [checked])

  function onSelect(i) {
    onChecked(i)
    setChecked(i)
    dispatch(updateResult({ trace, checked }))
  }

  return (
    <div className="questions">
      <h2 className='text-light'> Simple Question 1</h2>

      <ul key={questions?.id}>
        {
          questions?.options.map((q, i) => (
            <li key={i}>
              <input
                type="radio"
                value={false}
                name="options"
                id={`q${i}-option`}
                onChange={() => onSelect(i)}
              />

              <label htmlFor={`q${i}-option`}></label>

            </li>
          ))
        }
      </ul>
    </div>
  )
}
