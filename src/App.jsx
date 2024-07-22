import React from 'react'
import NavBar from './layout/NavBar'
import MainContent from './layout/MainContent'
import pfpicture from "./assets/ICON2.jpeg"


export default function App() {

  return (
    <div className='container'>
        <NavBar pfp={pfpicture} />
        <MainContent />
    </div>
  )
}