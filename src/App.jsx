import React from 'react'
import './components/style/App.css'
import './components/style/Responsive.css'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Card from './components/Card'
import { ProductProvider } from './context/ProductContext'
import HomePage from './components/HomePage'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import Beauty from './components/SubCategory/Beauty'
import Electronic from './components/SubCategory/Electronic'
import Fashion from './components/SubCategory/Fashion'
import AllCategory from './components/SubCategory/AllCategory'
import OrderPage from './components/SubCategory/OrderPage'
function App() {
  return (
    <>
    <ProductProvider>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={ <HomePage/>}/>
      <Route path='/products' element={ <Card/>}/>
      <Route path='/login' element={ <Login/>}/>
      <Route path='/Signup' element={ <Signup/>}/>
      <Route path='/Beauty' element={ <Beauty/>}/>
      <Route path='/Fashion' element={ <Fashion/>}/>
      <Route path='/Electronic' element={ <Electronic/>}/>
      <Route path='/AllCategory/:categoryName' element={ <AllCategory/>}/>
      <Route path='/OrderPage/:id' element={ <OrderPage/>}/>
    </Routes>
    </BrowserRouter>
    </ProductProvider>
    </>
  )
}

export default App
