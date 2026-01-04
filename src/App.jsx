import React from 'react'
import Navbar from './components/Navbar'
import './components/style/App.css'
import './components/style/Responsive.css'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Card from './components/Card'
import { ProductProvider } from './context/ProductContext'
import HomePage from './components/HomePage'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'

function App() {
  return (
    <>
    <ProductProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <HomePage/>}/>
      <Route path='/products' element={ <Card/>}/>
      <Route path='/login' element={ <Login/>}/>
      <Route path='/Signup' element={ <Signup/>}/>
    </Routes>
    </BrowserRouter>
    </ProductProvider>
    </>
  )
}

export default App
