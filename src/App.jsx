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
import HelpCenter from '../supportPage/HelpCenter'
import ContactUs from '../supportPage/ContactUs'
import FaQs from '../supportPage/FaQs'
import OrderGuide from '../supportPage/OrderGuide'
import AnswerePage from '../supportPage/AnswerePage'
import Loading from './components/SubCategory/Loading'
function App() {
  return (
    <>
    <ProductProvider>
    <BrowserRouter>
      <Loading/>
    <Routes>
      <Route path='/' element={ <HomePage/>}/>
      <Route path='/products/card' element={ <Card/>}/>
      <Route path='/login' element={ <Login/>}/>
      <Route path='/Signup' element={ <Signup/>}/>
      <Route path='/Beauty' element={ <Beauty/>}/>
      <Route path='/Fashion' element={ <Fashion/>}/>
      <Route path='/Electronic' element={ <Electronic/>}/>
      <Route path='/AllCategory/:categoryName' element={ <AllCategory/>}/>
      <Route path='/OrderPage/:id' element={ <OrderPage/>}/>
      <Route path='/HelpCenter' element={ <HelpCenter/>}/>
      <Route path='/ContactUs' element={ <ContactUs/>}/>
      <Route path='/FaQs' element={ <FaQs/>}/>
      <Route path='/OrderGuide' element={ <OrderGuide/>}/>
      <Route path='/AnswerePage' element={ <AnswerePage/>}/>
    </Routes>
    </BrowserRouter>
    </ProductProvider>
    </>
  )
}

export default App
