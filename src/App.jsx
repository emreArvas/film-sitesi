import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Header from './components/Header'
import WatchList from './components/WatchList'
import Watched from './components/Watched'
import "./lib/fontawesome-free-6.7.2-web/css/all.min.css"
import Add from './components/Add'
import { GlobalProvider } from './context/GlobalState';


function App() {

  return (
    <>
    <GlobalProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<WatchList/>}/>
        <Route path='/watched' element={<Watched/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
    </GlobalProvider>  
    </>
  )
}

export default App
