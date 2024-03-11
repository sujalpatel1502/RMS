import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/hotels' element={<List/>}/>
        <Route path='/hotels/:id' element={<Hotel/>}/> */}
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App