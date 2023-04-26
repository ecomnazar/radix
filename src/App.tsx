import { useRef, useState } from 'react'
import './index.scss'
import { useAppDispatch } from './assets/features/store'
import { addPerson } from './assets/Counter'
import List from './assets/List'
import { addToList } from './assets/features/NewSlice'
import Radix from './assets/Radis/Radix'
import RadixAlert from './assets/Radis/RadixAlert'
import RadixEditProfile from './assets/Radis/RadixEditProfile'
import RadixMenuBar from './assets/Radis/RadixMenuBar'
import RadixNavMenu from './assets/Radis/RadixNavMenu'
import RadixToast from './assets/Radis/RadixToast'

function App() {

  const inputRef = useRef<string>('')
  const dispatch = useAppDispatch()

  return (
    // <div className='h-[100vh] w-full bg-sky-500/50 flex flex-col justify-center items-center'>
    //     <div>
    //     <input onChange={(e) => inputRef.current = e.target.value} className='bg-white outline-none rounded-l-md text-[18px] px-2 py-2' type="text" placeholder='Name' />
    //     <button onClick={() => dispatch(addToList({name: inputRef.current}))} className='bg-white/75 rounded-r-md font-normal py-2 px-4 text-[18px]'>Add</button>
    //     </div>
    //   <List />
    // </div>
    <>
      <Radix />
      <RadixAlert />
      <RadixEditProfile />
      <RadixMenuBar />
      <RadixNavMenu />
      <RadixToast />
    </>
  )
}

export default App
