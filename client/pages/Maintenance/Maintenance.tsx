import { useState } from 'react'
import Rego from '../../components/Maintenance/Rego'
import WofSchedule from '../../components/Maintenance/WofSchedule'

function Maintenance() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="bg-opacity p-4">
        <div className="relative text-2xl">WoF</div>
        <span className="relative">
          A warrant of fitness (WoF) or certificate of fitness inspection is a
          regular check to make sure your vehicle is safe.
        </span>
        Enter when your latest Wof was done and get notification for your next
        scheduled Wof!
        <WofSchedule />
      </div>
      <div className="bg-opacity p-4">
        <Rego />
      </div>
    </div>
  )
}

export default Maintenance
