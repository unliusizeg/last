import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Artist from '../components/Home/Artist'
import Card from '../components/Detail/Card'

const AppRouter = () => {
  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Artist />} />
            <Route path='/detail' element={<Card />} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default AppRouter