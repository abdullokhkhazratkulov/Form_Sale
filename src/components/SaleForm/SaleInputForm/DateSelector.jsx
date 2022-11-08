import React from 'react'

const DateSelector = () => {
    const todayDate = new Date().toISOString().slice(0, 10);
  return (
    <div className='date'>
        <input className='border border-1 border-grey mt-2 px-2 form-control' type="date" defaultValue={todayDate} max={todayDate}/>
    </div>
  )
}

export default DateSelector