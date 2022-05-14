import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
import AddEdit from './pages/AddEdit'
import Home from './pages/Home'
import Search from './pages/Search'
import View from './pages/View'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <ToastContainer position='top-center' />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/add' element={<AddEdit />} />
          <Route path='/update/:id' element={<AddEdit />} />
          <Route path='/view/:id' element={<View />} />
          <Route path='/about' element={<About />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
