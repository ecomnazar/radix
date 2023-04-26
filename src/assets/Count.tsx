import React from 'react'
import { useAppDispatch, useAppSelector } from './features/store'
import { addPerson } from './Counter'
import { addToCount } from './features/CounterSlice'

const Count = () => {

  const res = useAppSelector((state) => state.count)
  const dispatch = useAppDispatch()

    return (
    <div className='w-full h-[100vh] bg-red-300'>
        <h1 className='text-[40px]'>{res.count}</h1>
        <button onClick={() => dispatch(addToCount({ count: 1 }))}>CLICK</button>
    </div>
  )
}

export default Count