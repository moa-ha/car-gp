/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'

function CarYear() {
  const [isShow, setIsShow] = useState(false)

  function handleClick() {
    setIsShow(true)
  }

  return (
    <>
      <input type="checkbox" onClick={handleClick}></input>
      {isShow && (
        <div className="p-4">
          <p className="underline">We'll send you notice in 6 months.</p>
          <p className=" text-sm italic">
            You need to get a Warrant of Fitness check: Once a year if your
            vehicle was first registered anywhere in the world on or after 1
            January 2000. Every six months if your vehicle was first registered
            anywhere in the world before 1 January 2000.
          </p>
        </div>
      )}
    </>
  )
}

export default CarYear
